import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Main(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    closeAllPopups();
    props.onLogin();
  }

  function handleSignUp() {
    return true;
  }

  function closeAllPopups() {
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(false);
  }

  function openSignInPopup() {
    setIsSignInPopupOpen(true)
  }

  function openSignUpPopup() {
    setIsSignInPopupOpen(true)
  }

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeAllPopups();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div>
      <PopupWithForm onSubmit={handleSignIn} onClose={closeAllPopups} isOpen={isSignInPopupOpen} buttonText='Sign In' otherLink='Sign up' name='sign-in' title='Sign In'>
        <p className="form__input-title">Email</p>
        <input id="email" type="email" className="form__input form__input_field_email" name="name" minLength={2} maxLength={40} placeholder="Enter email" required />
        <p className="form__input-title">Password</p>
        <input id="password" type="password" className="form__input form__input_field_password" name="pasword" placeholder="Enter password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
      </PopupWithForm>
      <PopupWithForm onSubmit={handleSignUp} onClose={closeAllPopups} isOpen={isSignUpPopupOpen} buttonText='Sign Up' otherLink='Sign in' name='sign-up' title='Sign Up'>
        <p className="form__input-title">Email</p>
        <input id="email" type="email" className="form__input form__input_field_email" name="name" minLength={2} maxLength={40} placeholder="Enter email" required />
        <span id="email-error" className="popup__error" />
        <p className="form__input-title">Password</p>
        <input id="password" type="password" className="form__input form__input_field_password" name="pasword" placeholder="Enter password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
        <p className="form__input-title">Username</p>
        <input id="username" type="username" className="form__input form__input_field_username" name="pasword" placeholder="Enter username" minLength={2} maxLength={200} required />
        <span id="username-error" className="popup__error" />
      </PopupWithForm>
      <SearchForm openSignInPopup={openSignInPopup} openSignUpPopup={openSignUpPopup} />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
