var React = require('react');

var UserInfo = React.createClass({

  render: function() {
    return (
      <div>
        <h1>{this.props.user.username}</h1>
        <h3>{this.props.user.name}</h3>
      </div>
    );
  }

});

module.exports = UserInfo;
