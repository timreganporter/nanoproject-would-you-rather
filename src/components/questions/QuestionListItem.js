import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionTemplate, { QuestionDisplay } from './QuestionTemplate';

class QuestionListItem extends Component {
  render() {
    const { question, asker } = this.props;

    return (
      <QuestionTemplate asker={asker} >
        <QuestionDisplay question={question} />
      </QuestionTemplate>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id] || null;
  const asker = question ? users[question.author] : null;
  return { question, asker }
}

export default connect(mapStateToProps)(QuestionListItem);