var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var ClientActions = require('../../actions/client_actions');

var UserShow = React.createClass({
  getStateFromStore: function () {
    return {user: UserIndexStore.findById(this.props.params.userId)};
  },

  onChange: function () {
    this.setState(this.getStateFromStore() );
  },

  getInitialState: function () {
    return { user: {} };
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchUser(newProps.params.userId);
  },

  componentDidMount: function () {
    this.listener = UserIndexStore.addListener(this.onChange);
    ClientActions.fetchUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function() {
    return (
      <div>
        {this.state.user.username}
      </div>
    );
  }

});

module.exports = UserShow;
