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
    window.removeEventListener("scroll", this.addPosts);
  },

  addPosts: function() {
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight
      && this.state.time + 1000 < Date.now() ) {
        // show spinner for 1 sec; is there a way to match the loading time?
        $('.fa-spinner').show();
        setTimeout(function() {$('.fa-spinner').hide() ;}, 1000);

        this.state.scrollCount += 1;
        this.state.time = Date.now();
        ClientActions.fetchPosts(this.state.scrollCount);
    }
  },

  render: function() {
    var posts = this.state.posts.map(function(post) {
      return (<Post key={post.id} post={post} />);
    });

    var spinner = <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>;

    var newUserMessage;
    if (posts.length === 0 && this.state.time + 10 < Date.now()) {
      spinner = null;
      newUserMessage = <h1 className="welcome-message">
        Welcome! Looks like you're not following anyone.
        Try searching for some users in the search bar</h1>;
    }

    return (
      <div className="index">
        {newUserMessage}
        {spinner}
        {posts}
      </div>
    );
  }
});

module.exports = Index;
