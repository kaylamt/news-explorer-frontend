import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  function handleLogIn() {
    setCurrentUser({
      _id: "1234",
      name: "Elise"
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter >
        <Switch>
          <Main exact path='/' onLogin={handleLogIn} />
          <SavedNews exact path='/saved-news' />
        </Switch>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};

export default App;