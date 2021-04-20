import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function ProtectedRoute(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const handleValidate = props.handleValidate;
  const path = props.path;
  const history = props.history;

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!currentUser._id) {
      handleValidate(token, history, path)
    }
  }, [handleValidate, currentUser, history, path]);

  return (
    <Route>
      {
        () => (props.currentUser._id ? props.children : <Redirect to='/' />)
      }
    </Route>
  )
};

export default withRouter(ProtectedRoute);