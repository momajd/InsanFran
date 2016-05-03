var React = require('react');
var UserStats = require('./UserStats');

var UserInfo = React.createClass({

  render: function() {
    return (
      <div className="user-info">
        <h1>{this.props.user.username}</h1>
        <h3>{this.props.user.name}</h3>
        <UserStats user={this.props.user} />
      </div>
    );
  }

});

module.exports = UserInfo;
