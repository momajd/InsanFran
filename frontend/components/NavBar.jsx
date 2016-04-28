var React = require('react');
var UserActions = require('../actions/user_actions');

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="nav-header">
        <nav className="profile-nav">
          I am the Nav Bar
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
