import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Main() {
  return (
    <div>
      {/* <PopupWithForm /> */}
      <SearchForm />
      <About />
      <Footer />
    </div>
  );
};

export default Main;