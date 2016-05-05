var React = require('react');
var ProfilePostPicture = require('./ProfilePostPicture');

var ProfilePostIndex = React.createClass({

  render: function() {
    var posts = this.props.user.posts.map(function(post) {
      return <ProfilePostPicture key={post.id} post={post} /> ;
    });

    return (
      <div className="profile-post-index">
        {posts}
      </div>
    );
  }
});

module.exports = ProfilePostIndex;
