import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //react use effect..id

  React.useEffect(() => {
    if (currentUser._id) {
      props.loadArticles();
    }
  })

  // const articles = [
  //   {
  //     keyword: "Nature",
  //     title: "Everyone Needs a Special 'Sit Spot' in Nature",
  //     text: "Ever since I read Richard Louv's influential book, \"Last Child in the Woods, \" the idea of having a special \"sit spot\" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
  //     date: "November 4, 2020",
  //     source: "treehugger",
  //     link: "https://www.treehugger.com/special-sit-spot-nature-5085811",
  //     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fbest-nature-image-2560x1440.jpg&f=1&nofb=1",
  //     _id: 1,
  //   },
  //   {
  //     keyword: "Nature",
  //     title: "Nature makes you better",
  //     text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
  //     date: "February 19, 2019",
  //     source: "national geographic",
  //     link: "https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better",
  //     image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnature-images..jpg&f=1&nofb=1",
  //     _id: 2,
  //   },
  //   {
  //     keyword: "Yellowstone",
  //     title: "Nostalgic Photos of Tourists in U.S. National Parks",
  //     text: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
  //     date: "October 19, 2020",
  //     source: "national geographic",
  //     link: "https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks",
  //     image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotographyblogger.net%2Fwp-content%2Fuploads%2F2017%2F07%2FYellowstone-Falls-%40dasuan.jpg&f=1&nofb=1",
  //     _id: 3,
  //   },
  //   {
  //     keyword: "Parks",
  //     title: "Grand Teton Renews Historic Crest Trail",
  //     text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
  //     date: "November 4, 2020",
  //     source: "National parks traveler",
  //     link: "https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail",
  //     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.theoutbound.com%2F2018%2F04%2F30%2F00%2F0b1b5902715e83a9eb7ea365b1785bf3%3F%26fit%3Dcrop%26w%3D970%26h%3D550%26auto%3Dformat%26dpr%3D2%26q%3D60&f=1&nofb=1",
  //     _id: 4,
  //   },
  //   {
  //     keyword: "Photography",
  //     title: "Scientists Don't Know Why Polaris Is So Weird",
  //     text: "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
  //     date: "March 16, 2020",
  //     source: "treehugger",
  //     link: "https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425",
  //     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.itstactical.com%2Fwp-content%2Fuploads%2F2013%2F11%2FNorth_Star_Polaris.jpg&f=1&nofb=1",
  //     _id: 5,
  //   },
  // ]
  return (
    <>
      <SavedNewsHeader articleCount={props.articles.length} />
      <NewsCardList articles={props.articles} />
      <Footer />
    </>
  );
};

export default SavedNews;