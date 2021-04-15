import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';


function Main(props) {

  return (
    <>
      <Header openSignInPopup={props.openSignInPopup} onSignOut={props.onSignOut} onSearch={props.onSearch} searching={props.searching} searchAttempted={props.searchAttempted} articles={props.articles} />
      <About />
      <Footer />
    </>
  );
};

export default Main;
