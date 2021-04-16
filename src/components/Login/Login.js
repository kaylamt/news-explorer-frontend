import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(values, props.history);
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.closeAllPopups} isOpen={props.isSignInPopupOpen} buttonText='Sign In' onFormLinkClick={props.openSignUpPopup} otherLink='Sign up' name='sign-in' title='Sign In' isValid={isValid} >
      <p className="form__input-title">Email</p>
      <input id="login-email" type="email" value={values.email} className="form__input form__input_field_email" name="email" placeholder="Enter email" onChange={handleChange} required />
      <span id="email-error" className="popup__error">{errors.email}</span>
      <p className="form__input-title">Password</p>
      <input id="login-password" type="password" value={values.password} className="form__input form__input_field_password" name="password" placeholder="Enter password" minLength={8} onChange={handleChange} required />
      <span id="password-error" className="popup__error">{errors.password}</span>
    </PopupWithForm>
  );
}

export default Login;
