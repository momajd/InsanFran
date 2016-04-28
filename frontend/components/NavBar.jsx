var React = require('react');
var UserActions = require('../actions/user_actions');

var NavBar = React.createClass({
  render: function () {
    return (
      <header>
        <nav>
          I am the Nav Bar
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
