var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');
var PostStore = require('../../stores/post_store');
var ClientActions = require('../../actions/client_actions');
var ProfileHeader = require('./ProfileHeader');
var ProfilePostIndex = require('./ProfilePostIndex');

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
    // render empty div if user does not yet exist
    var userShow;
    if (Object.keys(this.state.user).length === 0) {
       userShow = (<div/>);
     } else {
       userShow = (
         <div className="user-show">
           <ProfileHeader user={this.state.user} />
           <ProfilePostIndex user={this.state.user} />
         </div>
       );
     }

    return (
      <div>
        {userShow}
      </div>
    );
  }

});

module.exports = UserShow;
