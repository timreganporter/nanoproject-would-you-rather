import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteFlashMessage } from '../actions/flashMessages';
import FlashMessage from './FlashMessage';

class FlashMessageList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
    );

    return (
      <div>{messages}</div>
    )
  }

}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps({ flashMessages }) {
  return {
    messages: flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList)