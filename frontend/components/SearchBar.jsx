var React = require('react');
var UserIndexStore = require('../stores/user_index_store');
var ClientActions = require('../actions/client_actions');

var SearchBar = React.createClass({

  getInitialState: function() {
    return {users: {}, search: "", results: {}};
  },

  onChange: function() {
    this.setState({users: UserIndexStore.all()});
  },

  componentWillMount: function() {
    ClientActions.fetchAllUsers();
    this.listener = UserIndexStore.addListener(this.onChange);
  },

  render: function() {
    return (
      <div>
        <input></input>
      </div>
    );
  }

});

module.exports = SearchBar;
