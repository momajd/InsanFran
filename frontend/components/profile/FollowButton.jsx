var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

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
    var isFollowed = false;

    this.props.user.followers.forEach(function(follower) {
      if (follower.id === currentUser.id) {
        isFollowed = true;
      }
    });
    return isFollowed;
  },

  _toggleFollow: function() {
    var relationshipData = {
      follower_id: UserStore.currentUser(),
      followed_id: this.props.user.id
    };

    if (this.state.followed) {
      ClientActions.createFollow(relationshipData);
    }
  },

  render: function() {
    return (
      <button onClick={TODO}>Follow</button>
    );
  }

});

module.exports = FollowButton;
