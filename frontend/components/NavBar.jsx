var React = require('react');
var UserActions = require('../actions/user_actions');
var UploadButton = require('./UploadButton');
var SearchBar = require('./SearchBar');

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="nav-header">
        <nav className="profile-nav">
          <h1 className="logo-header">
            <a href="#" className="logo">InsanFran</a>
          </h1>
          <div className="nav-right">
            <button onClick={UserActions.logout}>Logout</button>
            <UploadButton />
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
