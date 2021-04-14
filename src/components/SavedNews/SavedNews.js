import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [articlesLoaded, setArticlesLoaded] = React.useState(false);
  const loadArticles = props.loadArticles;

  React.useEffect(() => {
    if (currentUser._id && !articlesLoaded) {
      loadArticles()
      setArticlesLoaded(true);
    }
  }, [currentUser, articlesLoaded, loadArticles]);

  return (
    <>
      <SavedNewsHeader articleCount={props.articles.length} onSignOut={props.onSignOut} keywords={props.articles.map(a => a.keyword)} />
      <NewsCardList articles={props.articles} onDeleteArticleClick={props.onDeleteArticleClick} />
      <Footer />
    </>
  );
};

export default SavedNews;