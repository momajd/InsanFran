var React = require('react');

var UserShow = React.createClass({
  getInitialState: function () {
    return {user: UserStore.findById(this.props.params.id), posts: PostStore.all()};
  },

  render: function() {
    return (
      <ProfilePicture />
    );
  }

});

module.exports = UserShow;
