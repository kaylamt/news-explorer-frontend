import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';


function Main(props) {
  return (
    <>
      <Header openSignInPopup={props.openSignInPopup} />
      <About />
      <Footer />
    </>
  );
};

export default Main;
