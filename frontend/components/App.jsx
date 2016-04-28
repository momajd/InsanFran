var React = require('react');
// Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// Components
var Index = require('./Index');
var NavBar = require('./NavBar');
// Mixins
var CurrentUserState = require('../mixins/current_user_state');


var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    return (
      <div>
        <header><h1>InsanFran</h1></header>
        {this.props.children}
      </div>
    );
  }
});

// TODO: verify that this is an appropriate name
module.exports = AppRouter;
