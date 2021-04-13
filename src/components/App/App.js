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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  // const [articles, setArticles] = React.useState([]);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);

  function handleLogIn(data) {
    // auth.authorize(data).then(
    //   (login) => {
    //     setLoggedIn(true);
    //     setEmail(data.email);
    //     history.push('/');
    //     localStorage.setItem('token', login.token);
    //     loadPageData();
    //   },
    // )
    //   .catch((err) => {
    //     setInfoTooltipType('error');
    //     setInfoTooltipMessage('Oops, something went wrong! Please try again.');
    //     console.log(err);
    //   });
    mainApi.authorize(data)
      .then((res) => {
        mainApi.validate(res.token)
          .then((user) => {
            closeAllPopups();
            setCurrentUser(user)
          })
      })
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
        // debugger
      })
    closeAllPopups();
    setIsRegistrationPopupOpen(true);
  }

  // function loadPageData() {
  //   mainApi.getAppInfo().then((res) => {
  //     const [userInfo, remoteCards] = res;
  //     setCards(remoteCards);
  //     setCurrentUser(userInfo);
  //   }).catch((error) => console.log(error));
  // }

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
          <Main exact path='/' openSignInPopup={openSignInPopup} />
          <ProtectedRoute path='/saved-news' currentUser={currentUser} >
            <SavedNews path='/saved-news' />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};

export default App;