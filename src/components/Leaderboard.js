import React, { Component} from 'react';
import { connect } from 'react-redux';

import Leader from './Leader';

class Leaderboard extends Component {
  renderUsers = () => {
    const { users } = this.props;
    return Object.keys(users).sort( (a,b) =>
        (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length)
      ).map( (id, index) => <Leader user={users[id]} key={id} place={index} />)
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
}


const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    questions,
    users
  };
};

export default connect(mapStateToProps)(Leaderboard);