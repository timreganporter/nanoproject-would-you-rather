import React, { Component} from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  renderList() {
    return this.props.questionIds.map( id => {
      return <QuestionListItem id={id} key={id} />
    })
  }

  render() {
    return (
      <div className="ui aligned centered">
        TK
          { this.renderList() }
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  // TODO: get logged in users, param for answered, filter list
  // TODO: sort by most recent
  // react state for answered/unanswered
  return {
    questionIds: Object.keys(questions)
  };
};

export default connect(mapStateToProps)(QuestionList);