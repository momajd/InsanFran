var React = require('react');
var UserIndexStore = require('../stores/user_index_store');
var ClientActions = require('../actions/client_actions');
var ProfilePicture = require('./profile/ProfilePicture');

var SearchBar = React.createClass({

  getInitialState: function() {
    return {search: ""};
  },

  onChange: function(e) {
    this.setState({search: e.target.value} );
  },

  componentWillMount: function() {
    ClientActions.fetchAllUsers();
  },

  resetOnClick: function(e) {
    this.setState({search: ""});
  },

  getSearchResults: function() {
    var userResults = UserIndexStore.filterSearch(this.state.search);

    if (this.state.search !== "" ) {
      return userResults.map(function(user) {
        return (
          <a key={user.id} href={"#/users/" + user.id}>

            <div className="user-search-result">
              <ProfilePicture user={user} />
              {user.username}
            </div>
          </a>
        );
      });
    }
  },

  render: function() {
    return (
      <div>
        <input
          type="text"
          placeholder="San Franciscans"
          className="search-field"
          value={this.state.search}
          onChange={this.onChange}>
        </input>

        <div className="user-search-box" onClick={this.resetOnClick}>
          {this.getSearchResults()}
        </div>
      </div>
    );
  }

});
module.exports = SearchBar;
