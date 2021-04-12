import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header';

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
    <main className="content">
      <Header page="signin" />
      <div className="auth">
        <div className="auth__container">
          <p className="auth__title">
            Login
          </p>
          <form onSubmit={handleSubmit} className="auth__form">
            <input className="auth__input" required id="email" name="email" type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
            <input className="auth__input" required id="password" name="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button type="submit" className="auth__submit-link">Log in</button>
          </form>
          <Link to="/signup" className="auth__redirect-link">Not a member yet? Sign up here!</Link>
        </div>
      </div>
    </main>
  );
}

export default withRouter(Login);
