import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [searchArticles, setSearchArticles] = React.useState([]);
  const [searchAttempted, setSearchAttempted] = React.useState(false);
  const [searching, setSearching] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  function handleLogIn(data) {
    mainApi.authorize(data)
      .then((login) => {
        mainApi.validate(login.token)
          .then((user) => {
            localStorage.setItem('token', login.token);
            closeAllPopups();
            setCurrentUser(user)
          })
      })
  }

  function handleValidate(token, history, path) {
    if (token) {
      mainApi.validate(token)
        .then((user) => {
          setCurrentUser(user)
          history.push(path)
        })

    } else {
      openSignInPopup()
    }
  }

  function closeAllPopups() {
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsRegistrationPopupOpen(false);
  }

  function openSignInPopup() {
    closeAllPopups();
    setIsSignInPopupOpen(true)
  }

  function openSignUpPopup() {
    closeAllPopups();
    setIsSignUpPopupOpen(true)
  }

  function handleSignUp(data) {
    // auth.register(data)
    //   .then(() => {
    //     setInfoTooltipType('success');
    //     setInfoTooltipMessage('Success! You have now been registered.');
    //     setTimeout(() => {
    //       history.push('/signin');
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     setInfoTooltipType('error');
    //     setInfoTooltipMessage('Oops, something went wrong! Please try again.');
    //     console.log(err);
    //   });
    mainApi.register(data)
      .then((res) => {
        closeAllPopups();
        setIsRegistrationPopupOpen(true);
      })
  }

  function loadArticles() {
    mainApi.getArticles().then((res) => {
      const remoteArticles = res;
      setArticles(remoteArticles);
    }).catch((error) => console.log(error));
  }

  function handleArticleDelete(articleId) {
    mainApi.deleteArticle(articleId)
      .then((deletedArticle) => {
        const newArticles = articles.filter((a) => a._id !== deletedArticle._id);
        setArticles(newArticles)
      }).catch((error) => console.log(error));
  }

  function handleSignOut(history) {
    history.push('/');
    setCurrentUser({});
    localStorage.removeItem('token');
  }

  function handleSearch(query) {
    startSearch(query);
    newsApi.searchArticles(query)
      .then((res) => {
        setSearchArticles(res.articles);
      }).catch((error) => console.log(error))
      .finally(endSearch);
  }

  function startSearch(query) {
    setSearching(true);
    setSearchAttempted(false);
    setSearchArticles([]);
    setSearchQuery(query);
    localStorage.setItem('query', query);
    localStorage.setItem('searchArticles', []);
  }

  function endSearch() {
    setSearching(false);
    setSearchAttempted(true);
    localStorage.setItem('searchArticles', searchArticles);
  }

  function parsedSearchArticles() {
    if (searchArticles.length > 0) {
      return searchArticles.map((article, index) => {
        return {
          keyword: searchQuery,
          title: article.title,
          text: article.description,
          date: parseDate(article.publishedAt),
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
          _id: index
        }
      })
    }
    return [];
  }

  function parseDate(string) {
    const part = string.split(/\D+/);
    const date = new Date(Date.UTC(part[0], --part[1], part[2], part[3], part[4], part[5], part[6]));
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options)
  }

  function handleSaveClick(articleId) {
    const parsedArticles = parsedSearchArticles();
    const article = parsedArticles.find((a) => a._id === articleId);
    mainApi.createArticle(article)
      .then((savedArticle) => {
        articles.push(savedArticle);
      }).catch((error) => console.log(error))
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!currentUser._id && token) {
      mainApi.validate(token)
        .then((user) => {
          setCurrentUser(user)
        })
    }
  }, [currentUser._id]);

  React.useEffect(() => {
    const keyClose = (e) => {
      if (e.keyCode === 27) {
        closeAllPopups();
      }
    }

    const clickClose = (e) => {
      if (e.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }
    window.addEventListener('keydown', keyClose)
    window.addEventListener('click', clickClose)
    return () => [
      window.removeEventListener('keydown', keyClose),
      window.removeEventListener('click', clickClose)
    ]
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter >
        <Login closeAllPopups={closeAllPopups} openSignUpPopup={openSignUpPopup} onLogin={handleLogIn} isSignInPopupOpen={isSignInPopupOpen} />
        <Register closeAllPopups={closeAllPopups} openSignInPopup={openSignInPopup} onRegister={handleSignUp} isSignUpPopupOpen={isSignUpPopupOpen} />
        <RegistrationPopup isOpen={isRegistrationPopupOpen} title="Registration successfully completed!" onFormLinkClick={openSignInPopup} onClose={closeAllPopups} />
        <Switch>
          <Main exact path='/' openSignInPopup={openSignInPopup} onSignOut={handleSignOut} onSearch={handleSearch} searching={searching} searchAttempted={searchAttempted} articles={parsedSearchArticles()} onSaveClick={handleSaveClick} openSignUpPopup={openSignUpPopup} />
          <ProtectedRoute path='/saved-news' currentUser={currentUser} handleValidate={handleValidate} >
            <SavedNews path='/saved-news' loadArticles={loadArticles} articles={articles} onDeleteArticleClick={handleArticleDelete} onSignOut={handleSignOut} />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};

export default App;