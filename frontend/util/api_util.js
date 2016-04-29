var ServerActions = require('../actions/server_actions');
var LikeActions = require('../actions/like_actions');

var ApiUtil = {
  fetchAllPosts: function(){
    $.ajax({
      url: 'api/posts',
      success: function(posts){
        ServerActions.receiveAllPosts(posts);
      }
    });
  },

  createComment: function(comment) {
    $.ajax({
      url: "api/posts/" + comment.post_id + "/comments",
      type: "POST",
      data: {comment: comment},
      success: function (commentData) {
        ServerActions.receiveComment(commentData);
      }
    });
  },

  createLike: function(like, success) {
    $.ajax({
      url: "api/posts/" + like.post_id + "/likes",
      data: {like: like},
      success: function(likeData) {
        LikeActions.receiveLike(likeData);
      }
    });
  },

  deleteLike: function() {
    $.ajax({

    });
  }
};

module.exports = ApiUtil;
