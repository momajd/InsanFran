var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');

var FollowButton = React.createClass({
  getInitialState: function() {
    return {followed: this._isFollowed() };
  },

  componentDidMount: function() {
    this.listener = UserIndexStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({followed: this.isFollowed() });
  },

  _isFollowed: function() {
    var currentUser = UserStore.currentUser();

    
  },

  render: function() {
    return (
      <button onClick={TODO}>Follow</button>
    );
  }

});

module.exports = FollowButton;
