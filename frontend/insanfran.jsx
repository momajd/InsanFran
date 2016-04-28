// React
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var LoginForm = require('./components/LoginForm');
var App = require('./components/App');

// Make current user available to all components
var UserActions = require('./actions/user_actions');
UserActions.fetchCurrentUser();

// TODO: remove after testing
// window.PostStore = require('./stores/post_store');
// window.ApiUtil = require('./util/api_util');

// TODO: refactor App and router into another file
// TODO: define and import registerApp



document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  if (root) {
    ReactDOM.render(App, root);
  } else {
    // else render RegisterApp
  }
});
