var React = require('react');
var UserInfo = require('./UserInfo');
var ProfilePicture = require('./ProfilePicture');
var FollowButton = require('./FollowButton');

var ProfileHeader = React.createClass({

  render: function() {

    return (
      <div className="profile-header">
        <ProfilePicture user={this.props.user} />
        <UserInfo user={this.props.user} />
        <FollowButton user={this.props.user}/>
      </div>
    );
  }

});

module.exports = ProfileHeader;
