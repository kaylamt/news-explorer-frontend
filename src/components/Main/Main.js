import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';

function Main(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    closeAllPopups();
    props.onLogin();
  }

  function handleSignUp(e) {
    e.preventDefault();
    closeAllPopups();
    setIsRegistrationPopupOpen(true);
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
    <>
      <PopupWithForm onSubmit={handleSignIn} onClose={closeAllPopups} isOpen={isSignInPopupOpen} buttonText='Sign In' onFormLinkClick={openSignUpPopup} otherLink='Sign up' name='sign-in' title='Sign In'>
        <p className="form__input-title">Email</p>
        <input id="email" type="email" className="form__input form__input_field_email" name="email" minLength={2} maxLength={40} placeholder="Enter email" required />
        <p className="form__input-title">Password</p>
        <input id="password" type="password" className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
      </PopupWithForm>
      <PopupWithForm onSubmit={handleSignUp} onClose={closeAllPopups} isOpen={isSignUpPopupOpen} buttonText='Sign Up' onFormLinkClick={openSignInPopup} otherLink='Sign in' name='sign-up' title='Sign Up'>
        <p className="form__input-title">Email</p>
        <input id="email" type="email" className="form__input form__input_field_email" name="email" minLength={2} maxLength={40} placeholder="Enter email" required />
        <span id="email-error" className="popup__error" />
        <p className="form__input-title">Password</p>
        <input id="password" type="password" className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
        <p className="form__input-title">Username</p>
        <input id="username" type="username" className="form__input form__input_field_username" name="username" placeholder="Enter username" minLength={2} maxLength={200} required />
        <span id="username-error" className="popup__error" />
      </PopupWithForm>
      <RegistrationPopup isOpen={isRegistrationPopupOpen} title="Registration successfully completed!" onFormLinkClick={openSignInPopup} onClose={closeAllPopups} />
      <Header openSignInPopup={openSignInPopup} />
      <About />
      <Footer />
    </>
  );
};

export default Main;
