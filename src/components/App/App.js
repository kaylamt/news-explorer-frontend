import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
          {/* <ProtectedRoute exact path='/saved-news' > */}
          <SavedNews exact path='/saved-news' />
          {/* </ProtectedRoute> */}
        </Switch>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};

export default App;