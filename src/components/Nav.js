import React from "react";

const Nav = () => (
  <nav className="ui pointing menu">
    <a href="/" className="item active">Home</a>
    <a href="/questions/new" className="item">New Question</a>
    <a href="/leaderboard" className="item">Leaderboard</a>
    <div className="right menu">
      <div className="item">Login</div>
    </div>
  </nav>
)
// Hello, name <avatar> Logout

export default Nav;