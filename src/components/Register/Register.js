import React from 'react';
import { withRouter } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email, password, username });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.closeAllPopups} isOpen={props.isSignUpPopupOpen} buttonText='Sign Up' onFormLinkClick={props.openSignInPopup} otherLink='Sign in' name='sign-up' title='Sign Up'>
      <p className="form__input-title">Email</p>
      <input id="email" type="email" value={email} onChange={handleEmailChange} className="form__input form__input_field_email" name="email" minLength={2} maxLength={40} placeholder="Enter email" required />
      <span id="email-error" className="popup__error" />
      <p className="form__input-title">Password</p>
      <input id="password" type="password" value={password} onChange={handlePasswordChange} className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={2} maxLength={200} required />
      <span id="password-error" className="popup__error" />
      <p className="form__input-title">Username</p>
      <input id="username" type="username" value={username} onChange={handleUsernameChange} className="form__input form__input_field_username" name="username" placeholder="Enter username" minLength={2} maxLength={200} required />
      <span id="username-error" className="popup__error" />
    </PopupWithForm>
  );
}

export default withRouter(Register);
