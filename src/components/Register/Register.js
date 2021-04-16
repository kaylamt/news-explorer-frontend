import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '', username: '' });

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(values, props.history);
  }

  function emailConflictText() {
    if (props.emailConflict) {
      return ("This email is not available")
    } return ("")
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.closeAllPopups} isOpen={props.isSignUpPopupOpen} buttonText='Sign Up' onFormLinkClick={props.openSignInPopup} isValid={isValid} otherLink='Sign in' name='sign-up' title='Sign Up'>
      <p className="form__input-title">Email</p>
      <input id="sign-upemail" type="email" value={values.email} onChange={handleChange} className="form__input form__input_field_email" name="email" minLength={2} maxLength={40} placeholder="Enter email" required />
      <span id="email-error" className="popup__error">{errors.email}</span>
      <p className="form__input-title">Password</p>
      <input id="signup-password" type="password" value={values.password} onChange={handleChange} className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={2} maxLength={200} required />
      <span id="password-error" className="popup__error">{errors.password}</span>
      <p className="form__input-title">Username</p>
      <input id="username" type="username" value={values.username} onChange={handleChange} className="form__input form__input_field_username" name="username" placeholder="Enter username" minLength={2} maxLength={200} required />
      <span id="username-error" className="popup__error">{errors.username}</span>
      <span id="email-conflict-error" className="popup__error_conflict">{emailConflictText()}</span>
    </PopupWithForm>
  );
}

export default Register;
