import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header';

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email, password }, props.history);
  }

  return (
    <main className="content">
      <Header page="signup" />
      <div className="auth">
        <div className="auth__container">
          <p className="auth__title">
            Sign up
      </p>
          <form onSubmit={handleSubmit} className="auth__form">
            <input className="auth__input" id="email" name="email" type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
            <input className="auth__input" id="password" name="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button type="submit" onSubmit={handleSubmit} className="auth__submit-link">Sign up</button>
          </form>
          <Link to="signin" className="auth__redirect-link">Already a member? Log in here</Link>
        </div>
      </div>
    </main>
  );
}

export default withRouter(Register);
