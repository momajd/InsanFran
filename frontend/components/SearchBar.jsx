var React = require('react');
var UserIndexStore = require('../stores/user_index_store');
var ClientActions = require('../actions/client_actions');

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

  // TODO: remove if can't get onBlur to work
  onBlur: function() {
    this.setState({search: ""});
  },

  resetOnClick: function(e) {
    this.setState({search: ""});
  },

  getSearchResults: function() {
    var userResults = UserIndexStore.filterSearch(this.state.search);

    if (this.state.search !== "" ) {
      return userResults.map(function(user) {
        return (
          <a key={user.id}
             href={"#/users/" + user.id}>

            <div className="user-search-result">
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
// onBlur={this.onBlur}>

module.exports = SearchBar;
