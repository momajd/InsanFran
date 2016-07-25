var React = require('react');
var LikeActions = require('../../actions/like_actions');
var UserStore = require('../../stores/user_store');
var PostStore = require('../../stores/post_store');

var LikeButton = React.createClass({

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

  _toggleLike: function(e) {
    e.preventDefault();
    var likeData = {post_id: this.props.post.id};

    if (this._isLiked() ) {
      LikeActions.deleteLike(likeData);
    } else {
      LikeActions.createLike(likeData);
    }
  },

  render: function() {
    var className = this._isLiked() ? "fa fa-heart fa-2x filled-heart" :
                                       "fa fa-heart-o fa-2x empty-heart";
    return (
      <div className="like-button">
        <i onClick={this._toggleLike} className={className}></i>
      </div>
    );
  }
});

module.exports = LikeButton;
