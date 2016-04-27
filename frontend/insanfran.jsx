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
var PostPicture = require('./components/PostPicture');
var PostsIndex = require('./components/PostsIndex');
// Mixins
var CurrentUserState = require('./mixins/current_user_state');

// TODO: remove after testing
// window.PostStore = require('./stores/post_store');
// window.ApiUtil = require('./util/api_util');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    return (
      <div>
        <header><h1>InsanFran</h1></header>
        <LoginForm />
        {this.props.children}
      </div>
    );
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostsIndex} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(router, root);
});
