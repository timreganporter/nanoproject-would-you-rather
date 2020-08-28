import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleAnswerQuestion } from '../../actions/questions';
import QuestionForm from './QuestionForm';
import QuestionTemplate from './QuestionTemplate';

class QuestionShow extends Component {
  handleSubmit = (e, selectedOption) => {
    e.preventDefault();
    const { authedUser, dispatch, } = this.props;
    const { id } = this.props.computedMatch.params;
    dispatch(handleAnswerQuestion({
      answer: selectedOption,
      authedUser,
      qid: id
    }));
  };

  render() {
    const { asker, authedUser, question } = this.props;

    if (!this.props.question) {
      return null;
    }

    return (
      <QuestionTemplate asker={asker} >
        <QuestionForm authedUser={authedUser} handleSubmit={this.handleSubmit} question={question} />
      </QuestionTemplate>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.computedMatch.params;
  const question = questions[id] || null;
  const asker = question ? users[question.author] : null;
  return { question, asker, authedUser };
}

export default connect(mapStateToProps)(QuestionShow);