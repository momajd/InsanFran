var React = require('react');
var UserActions = require('../actions/user_actions');
var UploadButton = require('./UploadButton');
var SearchBar = require('./SearchBar');
var UserStore = require('../stores/user_store');

var NavBar = React.createClass({
  render: function () {
    var currentUserId = UserStore.currentUser().id;
    return (
      <header className="nav-header">
        <nav className="profile-nav">
          <h1 className="logo-header">
            <a href="#" className="logo">InsanFran</a>
          </h1>

          <SearchBar />

          <div className="nav-right">
            <UploadButton />

            <a href={"#/users/" + currentUserId}>
              <i className="fa fa-user fa-2x user-icon"></i>
            </a>

            <i className="fa fa-sign-out fa-2x logout-button"
               onClick={UserActions.logout}
               aria-hidden="true">
            </i>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
