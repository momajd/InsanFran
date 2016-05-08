var React = require('react');
var PostStore = require('../stores/post_store');
var ClientActions = require('../actions/client_actions');
var Post = require('./post/Post');

var Index = React.createClass({
  getInitialState: function() {
    return {posts: [], scrollCount: 1, time: Date.now()} ;
  },

  onPostChange: function() {
    this.setState({posts: PostStore.all()});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onPostChange);
    // for infinite scroll
    this.scrollListener = window.addEventListener("scroll", this.addPosts);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  addPosts: function() {
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight &&
      // need to make sure we don't load all at once
        this.state.time + 1000 < Date.now() ) {
      this.state.scrollCount += 1;
      this.state.time = Date.now();
      ClientActions.fetchPosts(this.state.scrollCount);
    }
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
