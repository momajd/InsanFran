var React = require('react');
var LikeActions = require('../../actions/like_actions');
var UserStore = require('../../stores/user_store');
var PostStore = require('../../stores/post_store');

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: this._isLiked()};
  },

  componentDidMount: function() {
    this.listener = PostStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({liked: this._isLiked()});
  },

  _isLiked: function() {
    var currentUser = UserStore.currentUser();
    var liked = false;

    this.props.post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        liked = true;
      }
    });
    return liked;
  },

  _toggleLike: function() {
    var likeData = {post_id: this.props.post.id};

    if (this.state.liked) {
      LikeActions.deleteLike(likeData);
    } else {
      LikeActions.createLike(likeData);
    }
  },

  // TODO: Probably want to replace the button with some kind of symbol
  _buttonText: function() {
    if (this.state.liked) {
      return "Unlike";
    } else {
      return "Like";
    }
  },

  render: function() {
    return (
      <button onClick={this._toggleLike}>
        {this._buttonText()}
      </button>
    );
  }
});

module.exports = LikeButton;
