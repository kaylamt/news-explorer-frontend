import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Main(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);

  function handleSignIn(props) {
    return true;
  }

  function handleSignUp(props) {
    return true;
  }

  function closeSignInPopup() {
    setIsSignInPopupOpen(false);
  }

  function closeSignUpPopup() {
    setIsSignUpPopupOpen(false);
  }

  function openSignInPopup(params) {
    setIsSignInPopupOpen(true)
  }

  function openSignUpPopup(params) {
    setIsSignInPopupOpen(true)
  }

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeSignInPopup();
        closeSignUpPopup();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div>
      <PopupWithForm onSubmit={handleSignIn} onClose={closeSignInPopup} isOpen={isSignInPopupOpen} buttonText='Sign In' otherLink='Sign up' name='sign-in' title='Sign In'>
        <p className="form__input-title">Enter email</p>
        <input id="email" type="email" className="form__input form__input_field_name" name="name" minLength={2} maxLength={40} placeholder="Email" required />
        <span id="email-error" className="popup__error" />
        <p className="form__input-title">Enter password</p>
        <input id="password" type="password" className="form__input form__input_field_description" name="pasword" placeholder="Password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
      </PopupWithForm>
      <PopupWithForm onSubmit={handleSignUp} onClose={closeSignUpPopup} isOpen={isSignUpPopupOpen} buttonText='Sign Up' otherLink='Sign in' name='sign-up' title='Sign Up'>
        <p className="form__input-title">Enter email</p>
        <input id="email" type="email" className="form__input form__input_field_name" name="name" minLength={2} maxLength={40} placeholder="Email" required />
        <span id="email-error" className="popup__error" />
        <p className="form__input-title">Enter password</p>
        <input id="password" type="password" className="form__input form__input_field_description" name="pasword" placeholder="Password" minLength={2} maxLength={200} required />
        <span id="password-error" className="popup__error" />
        <p className="form__input-title">Enter username</p>
        <input id="username" type="username" className="form__input form__input_field_description" name="pasword" placeholder="Username" minLength={2} maxLength={200} required />
        <span id="username-error" className="popup__error" />
      </PopupWithForm>
      <SearchForm openSignInPopup={openSignInPopup} openSignUpPopup={openSignUpPopup} onLogin={props.onLogin} />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
