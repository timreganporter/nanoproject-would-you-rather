import React, { Component} from 'react';
import { connect } from 'react-redux';

class QuestionShow extends Component {
  render() {
    const { question, asker } = this.props;

    if (!asker) {
      // TODO: Loading bar?
      return <div>Loading...</div>;
    }

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
                <form>
                <div className="ui form">
                  <div className="grouped fields">
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input type="radio" name="rather" checked="false" className="hidden" />
                        <label>{ question.optionOne.text}</label>
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input type="radio" name="rather" checked="false" className="hidden" />
                        <label>{ question.optionTwo.text}</label>
                      </div>
                    </div>
                      <button className="ui primary button" style={{ marginTop: "1.3rem" }}>
                        Submit
                      </button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id] || null;
  const asker = question ? users[question.author] : null;
  return { question, asker }
}

export default connect(mapStateToProps)(QuestionShow);