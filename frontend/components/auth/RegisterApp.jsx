var React = require('react');
var LoginForm = require('./LoginForm');
var BackVideo = require('./BackVideo');

var RegisterApp = React.createClass({

  render: function() {
    return (
      <div className="register-page">
        <LoginForm />
        <BackVideo />
      </div>
    );
  }
});

module.exports = RegisterApp;
