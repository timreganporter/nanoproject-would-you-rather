import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={ props => (
    authedUser
    ? <Component {...rest} />
    : <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
  )} />
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(PrivateRoute);