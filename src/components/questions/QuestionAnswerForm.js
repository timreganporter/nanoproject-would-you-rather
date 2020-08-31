import React, { Component } from 'react';
import { Button, Divider, Form, Radio, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class QuestionAnswerForm extends Component {
  state = {
    selectedOption: null
  };

  handleChange = (_, { value }) => {
    this.setState({
      selectedOption: value
    });
  };

  onSubmit = (e) => {
    this.props.handleSubmit(e, this.state.selectedOption);
  }

  radioOption = (value) => (
    <Radio
      checked={this.state.selectedOption === value}
      label={this.props.question[value].text}
      onChange={this.handleChange}
      name="rather"
      value={value}
    />
  )

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onSubmit} >
          <Form.Field>
            { this.radioOption("optionOne") }
          </Form.Field>
          <Divider horizontal>or...</Divider>
          <Form.Field>
            { this.radioOption("optionTwo") }
          </Form.Field>
          <Button fluid primary style={{ marginTop: "1.3rem" }}>
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

QuestionAnswerForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default QuestionAnswerForm;