import React, { Component} from 'react';
import { connect } from 'react-redux';

class QuestionList extends Component {
  renderList() {
    return this.props.questionIds.map( id => {
      return <li>{id}</li>
    })
  }

  render() {
    return (
      <div>
        <ul> List:
          { this.renderList() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionIds: Object.keys(questions)
  };
};

export default connect(mapStateToProps)(QuestionList);