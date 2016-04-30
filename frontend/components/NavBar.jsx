var React = require('react');
var UserActions = require('../actions/user_actions');
var UploadButton = require('./UploadButton');

var NavBar = React.createClass({
  render: function () {
    return (
      <header>
        <nav>
          <h1 className="logo-header">
            <a href="#" className="logo">InsanFran</a>
          </h1>
          <button onClick={UserActions.logout}>Logout</button>
          <UploadButton />
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
