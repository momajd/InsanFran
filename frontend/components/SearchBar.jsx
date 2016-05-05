var React = require('react');
var UserIndexStore = require('../stores/user_index_store');
var ClientActions = require('../actions/client_actions');

var SearchBar = React.createClass({

  getInitialState: function() {
    return {search: ""};
  },

  onChange: function(e) {
    if (e) {
      this.setState({search: e.target.value} );
    }
  },

  componentWillMount: function() {
    ClientActions.fetchAllUsers();
    this.listener = UserIndexStore.addListener(this.onChange);
  },

  getSearchResults: function() {
    var userResults = UserIndexStore.filterSearch(this.state.search);

    if (this.state.search !== "" ) {
      return userResults.map(function(user) {
        return (
          <div key={user.id} className="user-search-result">
            {user.username}
          </div>
        );
      });
    }
  },

  render: function() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          className="search-field"
          value={this.state.search}
          onChange={this.onChange}>
        </input>

        <div className="user-search-box">
          {this.getSearchResults()}
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
