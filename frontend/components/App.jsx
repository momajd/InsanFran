var React = require('react');
// Components
var NavBar = require('./NavBar');
// Mixins
var CurrentUserState = require('../mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  // TODO: consider removing mixin
  render: function(){
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
