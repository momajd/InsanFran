var React = require('react');
var LoginForm = require('./LoginForm');

var RegisterApp = React.createClass({
  render: function() {
    return (
      <div className="register-page">
        <LoginForm />
      </div>
    );
  }
});

module.exports = RegisterApp;
