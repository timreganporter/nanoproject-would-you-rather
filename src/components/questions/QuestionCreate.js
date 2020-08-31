import React, { Component} from 'react';
import { Card, Divider, Form, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import { addFlashMessage } from '../../actions/flashMessages';
import { handleAddQuestion } from '../../actions/questions';

class QuestionCreate extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(
      handleAddQuestion(this.state.optionOne, this.state.optionTwo)
    );
    dispatch(addFlashMessage({
      type: 'success',
      text: 'Thanks! Your question has been added.'
    }));
    this.props.history.push("/");
  }

  render() {
    return (
      <Card centered fluid>
        <Card.Content header='Create New Question' textAlign='center' />
        <Card.Content>
          Complete the question:
          <br />
          <Header as='h2'>Would you rather...</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                name='optionOne'
                onChange={this.handleChange}
                placeholder='Enter Option One Text Here'
                value={this.state.optionOne}
              />
            </Form.Field>
            <Divider horizontal>or...</Divider>
            <Form.Field>
              <Form.Input
                name='optionTwo'
                onChange={this.handleChange}
                placeholder='Enter Option Two Text Here'
                value={this.state.optionTwo}
              />
            </Form.Field>
            <Form.Button fluid primary style={{ marginTop: "1.3rem" }} content='Submit' />
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(QuestionCreate);