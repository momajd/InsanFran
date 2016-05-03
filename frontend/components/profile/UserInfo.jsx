var React = require('react');
var UserStats = require('./UserStats');
var FollowButton = require('./FollowButton');

var UserInfo = React.createClass({

  render: function() {
    return (
      <div className="user-info-box">
        <div className="profile-header-name">
          <h1>{this.props.user.username}</h1>
          <div className="follow-button-box">
            <FollowButton user={this.props.user}/>
          </div>
        </div>

        <h3>{this.props.user.name}</h3>
        <UserStats user={this.props.user} />
      </div>
    );
  }

});

module.exports = UserInfo;
