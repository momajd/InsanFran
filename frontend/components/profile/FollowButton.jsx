var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

var FollowButton = React.createClass({

  getInitialState: function() {
    return {followed: false };
  },

  // ran into bug with using listener on the UserIndexStore (the listener was
  // not set off on the before the inital render of the button, so the button
  // would always start as 'Follow') This way ensures the button will receive
  // the correct props before rendering
  componentWillReceiveProps: function(newProps) {
    this.setState({followed: UserIndexStore.userIsFollowed(newProps.user)} );
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
