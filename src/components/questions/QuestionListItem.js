import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

class QuestionListItem extends Component {
  render() {
    const { question, asker } = this.props;

    return (
      <div className="ui centered card fluid">
          <div className="ui top attached block header">
            { asker.name } asks:
          </div>
        <div className="ui attached segment">
          <div className="ui internally celled grid">
            <div className="row">
              <div className="five wide column">
                <img src={ asker.avatarURL } alt={ asker.name } className="ui large circular image" />
              </div>
              <div className="ten wide column">
                <h2 className="ui header">Would you rather...</h2>
                <TextTruncate line={1} truncateText="..." text={question.optionOne.text} />
                <div className="ui horizontal divider">OR</div>
                <TextTruncate line={1} truncateText="..." text={question.optionTwo.text} />
                <Link to={`/questions/${question.id}`} class="ui primary basic button" style={{ marginTop: "1.3rem" }}>
                  Take Poll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    question: questions[id] || null,
    asker: users[question.author]
  }
}

export default connect(mapStateToProps)(QuestionListItem);