var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

var FollowButton = React.createClass({

  getInitialState: function() {
    return {followed: false };
  },

  componentDidMount: function() {
    this.listener = UserIndexStore.addListener(this._updateFollowedState);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _updateFollowedState: function() {
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

  _toggleFollow: function() {
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

  _buttonDisplay: function (){

    if (this.props.user.id === UserStore.currentUser().id ||
        Object.keys(this.props.user).length === 0) {
      //don't render anything if user is at their own page
      //also don't render until user exists
      return;
    } else {
      return (
        <input type="checkbox"
               checked={this.state.followed}
               onChange={this._toggleFollow}/>
      );
    }
  },

  render: function() {
    return (
      <div>
        {this._buttonDisplay()}
      </div>
    );
  }

});

module.exports = FollowButton;

// OLD BORING BUTTON
// _buttonDisplay: function (){
//   if (this.props.user.id === UserStore.currentUser().id) {
//     return; //don't render anything if user is at their own page
//   } else if (this.state.followed) {
//     return (
//       <button className="unfollow_button" onClick={this._toggleFollow}>
//         Following
//       </button>
//     );
//   } else {
//     return (
//       <button className="follow_button" onClick={this._toggleFollow}>
//         Follow
//       </button>
//     );
//   }
// },
