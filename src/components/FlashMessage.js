import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

class FlashMessage extends Component {
  state = { visible: true }

  // TODO auto-remove timer

  handleDismiss = () => {
    this.setState({ visible: false })
    this.props.deleteFlashMessage(this.props.message.id);
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.handleDismiss(), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { type, text } = this.props.message;

    if (!this.state.visible) {
      return null;
    }

    return (
      <Message
        success={type === 'success'} // Recommended future TODO: handle error flashes
        content={text}
        onDismiss={this.handleDismiss}
        style={{ margin: '1.3rem, 0' }}
      />
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;