var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');

var UserShow = React.createClass({
  getInitialState: function () {
    return {user: UserIndexStore.findById(this.props.params.id)};
  },

  render: function() {
    return (
      <div>
        {this.state.user}
      </div>
    );
  }

});

module.exports = UserShow;
