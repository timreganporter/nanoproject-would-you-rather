import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={ ownProps => (
    authedUser
    ? <Component {...rest} />
    : <Redirect to='/login' />
  )} />
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(PrivateRoute);