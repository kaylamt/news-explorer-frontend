import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import Main from '../Main/Main'
import SavedNews from '../SavedNews/SavedNews'

function App() {
  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [email, setEmail] = React.useState('');

  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     auth.validate(token)
  //       .then((validation) => {
  //         setLoggedIn(true);
  //         setEmail(validation.email);
  //         loadPageData();
  //       }).catch((error) => console.log(error));
  //   }
  // }, []);

  return (
    <BrowserRouter >
      <Switch>
        <Main exact path='/' />
        <SavedNews exact path='/saved-news' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;