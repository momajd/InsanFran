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
var LoginForm = require('./components/LoginForm');
// Mixins
var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    return (
      <div>
        <header><h1>InsanFran</h1></header>
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Router path="/" component={App} />
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
