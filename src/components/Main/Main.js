import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';

function Main(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);

  function handleSignIn(data) {
    // auth.authorize(data).then(
    //   (login) => {
    //     setLoggedIn(true);
    //     setEmail(data.email);
    //     history.push('/');
    //     localStorage.setItem('token', login.token);
    //     loadPageData();
    //   },
    // )
    //   .catch((err) => {
    //     setInfoTooltipType('error');
    //     setInfoTooltipMessage('Oops, something went wrong! Please try again.');
    //     console.log(err);
    //   });
    mainApi.authorize(data)
      .then((res) => {
        debugger
      })
    closeAllPopups();
    props.onLogin();
  }

  function handleSignUp(data) {
    // auth.register(data)
    //   .then(() => {
    //     setInfoTooltipType('success');
    //     setInfoTooltipMessage('Success! You have now been registered.');
    //     setTimeout(() => {
    //       history.push('/signin');
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     setInfoTooltipType('error');
    //     setInfoTooltipMessage('Oops, something went wrong! Please try again.');
    //     console.log(err);
    //   });
    mainApi.register(data)
      .then((res) => {
        debugger
      })
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
      <Login closeAllPopups={closeAllPopups} openSignUpPopup={openSignUpPopup} onLogin={handleSignIn} isSignInPopupOpen={isSignInPopupOpen} />
      <Register closeAllPopups={closeAllPopups} openSignInPopup={openSignInPopup} onRegister={handleSignUp} isSignUpPopupOpen={isSignUpPopupOpen} />
      <RegistrationPopup isOpen={isRegistrationPopupOpen} title="Registration successfully completed!" onFormLinkClick={openSignInPopup} onClose={closeAllPopups} />
      <Header openSignInPopup={openSignInPopup} />
      <About />
      <Footer />
    </>
  );
};

export default Main;
