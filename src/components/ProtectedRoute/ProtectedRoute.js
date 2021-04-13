import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//change loggedIn

const ProtectedRoute = (props) => (
  <Route>
    {
      () => (props.loggedIn ? props.children : <Redirect to='/' />)
    }
  </Route>
);

export default ProtectedRoute;