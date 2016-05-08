var React = require('react');
var PostStore = require('../stores/post_store');
var ClientActions = require('../actions/client_actions');
var Post = require('./post/Post');

var Index = React.createClass({
  getInitialState: function() {
    return {posts: [], scrollCount: 1} ;
  },

  onPostChange: function() {
    this.setState({posts: PostStore.all()});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onPostChange);
    this.scrollListener = window.addEventListener("scroll", this.addPosts);
    ClientActions.fetchAllPosts();
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  addPosts: function() {
    // TODO
  },

  render: function() {
    var posts = this.state.posts.map(function(post) {
      return (<Post key={post.id} post={post} />);
    });

    return (
      <div className="index">
        {posts}
      </div>
    );
  }
});

module.exports = Index;
