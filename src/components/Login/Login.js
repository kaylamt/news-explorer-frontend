import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (props.loggedIn) {
      props.history.push('/');
    }
  }, [props.loggedIn]);

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({ email, password }, props.history);
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.closeAllPopups} isOpen={props.isSignInPopupOpen} buttonText='Sign In' onFormLinkClick={props.openSignUpPopup} otherLink='Sign up' name='sign-in' title='Sign In'>
      <p className="form__input-title">Email</p>
      <input id="email" type="email" value={email} className="form__input form__input_field_email" name="email" minLength={2} maxLength={40} placeholder="Enter email" onChange={handleEmailChange} required />
      <p className="form__input-title">Password</p>
      <input id="password" type="password" value={password} className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={2} maxLength={200} onChange={handlePasswordChange} required />
      <span id="password-error" className="popup__error" />
    </PopupWithForm>
  );
}

export default Login;
