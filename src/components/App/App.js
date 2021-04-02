import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import Main from '../Main/Main'
import SavedNews from '../SavedNews/SavedNews'

function App() {
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