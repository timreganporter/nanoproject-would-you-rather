import React, { Component} from 'react';
import { Button, Card, Dropdown, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

class SignIn extends Component {
  state = {
    selectedUser: null,
    buttonDisabled: true
  };


  handleSelectChange = (_, { value }) => {
    this.setState({
      selectedUser: value,
      buttonDisabled: !value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { dispatch, history, location } = this.props
    const { from } = location.state || { from: { pathname: "/" } };
    dispatch(setAuthedUser(this.state.selectedUser));
    history.replace(from);
  };

  renderUsers() {
    const { users } = this.props;
    return Object.keys(users).map( id => {
      const user = users[id];
      return {
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL }
      }
    });
  }

  render() {
    return (
      <Card fluid color='teal'>
        <Card.Content>
          <Header content='Welcome to Would You Rather?' color="blue" size="huge" textAlign="center" block/>
          <Header content='Sign In' textAlign="center" />
          <Dropdown
            button
            className='icon'
            floating
            labeled
            fluid
            icon='user'
            onChange={this.handleSelectChange}
            options={this.renderUsers()}
            placeholder='Select a user'
            search
            selection
          />
          <Button
            color='teal'
            disabled={this.state.buttonDisabled}
            fluid
            onClick={this.handleClick}
            style={{ marginTop: '1.3rem' }}
           >
            Sign In <Icon name='sign in' style={{ paddingLeft: '1.2rem' }}/>
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(SignIn);