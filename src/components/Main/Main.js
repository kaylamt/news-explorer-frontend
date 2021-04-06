import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Main(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);

  function handleSignIn(props) {
    return true;
  }
  function closeAllPopups(e) {
    setIsSignInPopupOpen(false);
  }
  function openSignInPopup(params) {
    setIsSignInPopupOpen(true)
  }

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeAllPopups()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div>
      <PopupWithForm onSubmit={handleSignIn} onClose={closeAllPopups} isOpen={isSignInPopupOpen} buttonText='Sign In' name='sign-in' title='Sign In'>
        <input id="email" type="email" className="form__input form__input_field_name" name="name" minLength={2} maxLength={40} placeholder="Email" required />
        <span id="name-error" className="popup__error" />
        <input id="password" type="password" className="form__input form__input_field_description" name="pasword" placeholder="Password" minLength={2} maxLength={200} required />
        <span id="description-error" className="popup__error" />
      </PopupWithForm>
      <SearchForm openSignInPopup={openSignInPopup} onLogin={props.onLogin} />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
