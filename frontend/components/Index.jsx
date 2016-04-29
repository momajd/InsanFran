var React = require('react');
var PostStore = require('../stores/post_store');
var ClientActions = require('../actions/client_actions');
var PostPicture = require('./post/PostPicture');
var Post = require('./post/Post');
var NavBar = require('./NavBar');

var Index = React.createClass({
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
      return (<Post key={post.id} post={post} />);
    });

// TODO:Remove navbar from index

    return (
      <div className="index">
        <NavBar />
        {posts}
      </div>
    );
  }
});

module.exports = Index;
