import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { addFlashMessage } from '../actions/flashMessages';
import FlashMessagesList from './FlashMessagesList';
import { handleInitialData } from '../actions/shared';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import QuestionList from './questions/QuestionList';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResults from './questions/QuestionResults';
import QuestionShow from './questions/QuestionShow';
import SignIn from './SignIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <div className="ui raised very padded text container segment">
          <Nav />
          {this.props.loading || (
            <div className="ui middle aligned centered">
              <FlashMessagesList />
              <Switch>
                <PrivateRoute path="/" exact component={QuestionList} />
                <PrivateRoute path="/questions/new" exact component={QuestionCreate} />
                <PrivateRoute path="/questions/:id/results" exact component={QuestionResults} />
                <PrivateRoute path="/questions/:id" exact component={QuestionShow} />
                <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
                <Route path="/login" exact component={SignIn} addFlashMessage={addFlashMessage} />
                <Route path="/404" exact component={NotFound} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    loading: questions === null,
  };
}

export default connect(mapStateToProps)(App);