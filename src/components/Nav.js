import React, { Component } from "react";
import { connect } from 'react-redux';
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

import { removeAuthedUser } from '../actions/authedUser';

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(removeAuthedUser());
    this.props.history.push('/login');
  };

  render() {
    const { authedUser } = this.props;

    return (
      <Menu pointing stackable>
        <NavLink to="/" exact className="item">Home</NavLink>
        <NavLink to="/questions/new" className="item">New Question</NavLink>
        <NavLink to="/leaderboard" className="item">Leaderboard</NavLink>
        <Menu.Menu position='right'>
          { authedUser
          ? <Menu.Item>
              <Image src={authedUser.avatarURL} avatar />
              <Dropdown
                item
                text={`Welcome, ${authedUser.name}`}
              >
                <Dropdown.Menu>
                  <Dropdown.Item value="logout" onClick={this.handleLogout}>
                    Logout <Icon name='sign out' style={{ paddingLeft: '1.2rem' }}/>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          : <NavLink to="/login" className="item">Login</NavLink> }
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: users[authedUser]
  }
}

export default withRouter(connect(mapStateToProps)(Nav));