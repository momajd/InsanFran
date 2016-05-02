var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

var FollowButton = React.createClass({
  getInitialState: function() {
    return {followed: false };
  },

  componentDidMount: function() {
    this.listener = UserIndexStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({followed: this._isFollowed() });
  },

  _isFollowed: function() {
    var currentUser = UserStore.currentUser();
    var isFollowed = false;

    // First flux cycle will not have a user
    if (Object.keys(this.props.user).length !== 0) {
      this.props.user.followers.forEach(function(follower) {
        if (follower.id === currentUser.id) {
          isFollowed = true;
        }
      });
    }
    return isFollowed;
  },

  _toggleFollow: function(e) {
    e.preventDefault();
    var relationshipData = {
      follower_id: UserStore.currentUser().id,
      followed_id: this.props.user.id
    };

    if (this.state.followed) {
      ClientActions.deleteFollow(relationshipData);
    } else {
      ClientActions.createFollow(relationshipData);
    }
  },

  _buttonText: function (){
    if (this.state.followed) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  },

  render: function() {

    return (
      <button onClick={this._toggleFollow}>
        {this._buttonText()}
      </button>
    );
  }

});

module.exports = FollowButton;
