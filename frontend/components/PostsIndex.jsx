var React = require('react');
var PostStore = require('../stores/post_store');
var ClientActions = require('../actions/client_actions');

var PostsIndex = React.createClass({
  getInitialState: function() {
    return {posts: PostStore.all()} ;
  },

  onPostChange: function() {
    this.setState({posts: PostStore.all()});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onPostChange);
    ClientActions.fetchAllPosts();
  },

  render: function() {
    var posts = this.state.posts.map(function(post) {
      return (<div>{post.image_url}</div>);
    });

    return (
      <div>
        {posts}
      </div>
    );
  }
});

module.exports = PostsIndex;
