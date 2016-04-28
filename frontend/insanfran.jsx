// React
var React = require('react');
var ReactDOM = require('react-dom');
// Components
var LoginForm = require('./components/auth/LoginForm');
var RegisterApp = require('./components/auth/RegisterApp');
var AppRouter = require('./components/App');

// Make current user available to all components
var UserActions = require('./actions/user_actions');
UserActions.fetchCurrentUser();


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  var register = document.getElementById('register');

  // if rails controller redirects us to 'register', no user is logged in
  // see static_pages_controller.rb
  if (root) {
    ReactDOM.render(AppRouter, root);
  } else {
    ReactDOM.render(<RegisterApp />, register);
  }
});
