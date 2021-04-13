import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//change loggedIn

const ProtectedRoute = (props) => (
  <Route>
    {
      () => (props.currentUser._id ? props.children : <Redirect to='/' />)
    }
  </Route>
);

export default ProtectedRoute;