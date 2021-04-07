import React from 'react';
import Header from '../Header/Header'
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader';

function SearchForm(props) {

  const [articles, setArticles] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [searchAttempted, setSearchAttempted] = React.useState(false);
  const [searching, setSearching] = React.useState(false);


  function search(e) {
    e.preventDefault();
    setSearching(true);
    setSearchAttempted(false);

    if (query === "Nature") {
      setArticles([
        {
          keyword: "Nature",
          title: "Everyone Needs a Special 'Sit Spot' in Nature",
          text: "Ever since I read Richard Louv's influential book, \"Last Child in the Woods, \" the idea of having a special \"sit spot\" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
          date: "November 4, 2020",
          source: "treehugger",
          link: "https://www.treehugger.com/special-sit-spot-nature-5085811",
          image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dailycompass.org%2Fwp-content%2Fuploads%2F2012%2F07%2Fwoods.jpeg&f=1&nofb=1",
          _id: 1,
        },
        {
          keyword: "Nature",
          title: "Nature makes you better",
          text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
          date: "February 19, 2019",
          source: "national geographic",
          link: "https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better",
          image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnature-images..jpg&f=1&nofb=1",
          _id: 2,
        },
        {
          keyword: "Yellowstone",
          title: "Nostalgic Photos of Tourists in U.S. National Parks",
          text: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
          date: "October 19, 2020",
          source: "national geographic",
          link: "https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks",
          image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotographyblogger.net%2Fwp-content%2Fuploads%2F2017%2F07%2FYellowstone-Falls-%40dasuan.jpg&f=1&nofb=1",
          _id: 3,
        }
      ])
    } else {
      setArticles([])
    }
    setTimeout(() => {
      setSearching(false)
      setSearchAttempted(true)
    }, 1000);
  }

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function searchResults() {
    if (articles.length > 0) {
      return (
        <div className="search-form__results">
          <NewsCardList articles={articles} />
        </div>
      )
    } else if (searchAttempted) {
      return (
        <div className="search-not-found">Nothing found</div>
      )
    }
    else if (searching) {
      return <div className="preloader">
        <Preloader isShown={searching} />
      </div>
    }
  }

  return (
    <>
      <div className="search-form">
        <Header cssModifier="home" openSignInPopup={props.openSignInPopup} />
        <div className="search-form__content">
          <h1 className="search-form__title">
            What's going on in the world?
          </h1>
          <div className="search-form__subtitle">
            Find the latest news on any topic and save them in your personal account.
          </div>
          <form action="#" className="search-form__search-container" onSubmit={search} >
            <input name="query" className="search-form__search-field" placeholder="Enter topic" value={query} onChange={handleQueryChange} required />
            <button aria-label="search button" className="search-form__search-button" type="submit">Search</button>
          </form>
        </div>
      </div>
      {searchResults()}
    </>
  );
}

export default SearchForm;