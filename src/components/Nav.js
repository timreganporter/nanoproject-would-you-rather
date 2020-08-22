import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="ui pointing menu">
    <NavLink to="/" exact className="item">Home</NavLink>
    <NavLink to="/questions/new" className="item">New Question</NavLink>
    <NavLink to="/leaderboard" className="item">Leaderboard</NavLink>
    <div className="right menu">
      <NavLink to="/login" className="item">Login</NavLink>
    </div>
  </nav>
)
// Hello, name <avatar> Logout

export default Nav;