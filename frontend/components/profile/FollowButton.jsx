var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

var FollowButton = React.createClass({

  _toggleFollow: function() {
    var relationshipData = {
      follower_id: UserStore.currentUser().id,
      followed_id: this.props.user.id
    };

    if (this.userIsFollowed()) {
      ClientActions.deleteFollow(relationshipData);
    } else {
      ClientActions.createFollow(relationshipData);
    }
  },

  userIsFollowed: function() {
    return UserIndexStore.userIsFollowed(this.props.user);
  },

  _buttonDisplay: function (){
    if (this.props.user.id === UserStore.currentUser().id) {
      //don't render anything if user is at their own page
      return;
    } else {
      return (
        <input type="checkbox"
               checked={this.userIsFollowed()}
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

// REMOVED; just use props
// getInitialState: function() {
//   return {followed: false };
// },

// ran into bug with using listener on the UserIndexStore (the listener was
// not set off before the inital render of the button, so the button
// would always start as 'Follow') This way ensures the button will receive
// the correct props before rendering
// componentWillReceiveProps: function(newProps) {
//   this.setState({followed: UserIndexStore.userIsFollowed(newProps.user)} );
// },
