import React, { Component} from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  state = {
    filter: 'Unanswered'
  }

  handleClick = (e, { value }) => {
    e.preventDefault();
    this.setState({ filter: value });
  }

  renderButton = filter => (
    <Button
      active={this.state.filter === filter}
      onClick={this.handleClick}
      primary={this.state.filter === filter}
      value={filter}
    >
      {filter}
    </Button>
  )

  filterQuestions = () => {
    const { authedUser, questions } = this.props;
    const answerFilter = this.state.filter === 'Answered';
    return Object.keys(questions)
      .filter( id => authedUser.answers.hasOwnProperty(id) === answerFilter)
      .sort( (a,b) => {
        return questions[b].timestamp - questions[a].timestamp
      })
      .map( id => {
        return <QuestionListItem id={id} key={id} />
      });
  }

  render() {
    return (
      <React.Fragment>
        <Button.Group attached='top'>
          {this.renderButton('Unanswered')}
          {this.renderButton('Answered')}
        </Button.Group>
        <Segment attached>
          { this.filterQuestions() }
        </Segment>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    questions,
    authedUser: users[authedUser]
  };
};

export default connect(mapStateToProps)(QuestionList);