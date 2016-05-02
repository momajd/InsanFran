var React = require('react');
var ProfilePostPicture = require('./ProfilePostPicture');

var ProfilePostIndex = React.createClass({

  render: function() {
    // render empty div on the first flux cycle (otherwise map will throw error)
    if (Object.keys(this.props.user).length === 0) {
      return <div/>;
    } else {
      var posts = this.props.user.posts.map(function(post) {
        return <ProfilePostPicture key={post.id} post={post} /> ;
      });

      return (
        <div className="profile-post-index">
          {posts}
        </div>
      );
    }
  }
});

module.exports = ProfilePostIndex;
