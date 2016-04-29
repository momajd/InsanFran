// React
var React = require('react');
var ReactDOM = require('react-dom');
// Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// Components
var LoginForm = require('./components/auth/LoginForm');
var RegisterApp = require('./components/auth/RegisterApp');
var Index = require('./components/Index');
var App = require('./components/App');
// Make current user available to all components
var UserActions = require('./actions/user_actions');
UserActions.fetchCurrentUser();

// TODO: remove after testing
window.ApiUtil = require('./util/api_util');
window.UserStore = require('./stores/user_store');
window.PostStore = require('./stores/post_store');
window.LikeActions = require('./actions/like_actions');

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  var register = document.getElementById('register');

  // if rails controller redirects us to 'register', no user is logged in
  // see static_pages_controller.rb
  if (root) {
    ReactDOM.render(router, root);
  } else {
    ReactDOM.render(<RegisterApp />, register);
  }
});
