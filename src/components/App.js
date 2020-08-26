import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleInitialData } from '../actions/shared';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
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
      <div className="ui raised very padded text container segment">
        <Router>
          <Nav />
          <div className="ui middle aligned centered">
          <Switch>
            <Route path="/" exact component={QuestionList} />
            <Route path="/questions/new" exact component={QuestionCreate} />
            <Route path="/questions/:id/results" exact component={QuestionResults} />
            <Route path="/questions/:id" exact component={QuestionShow} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/login" exact component={SignIn} />
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(null)(App);