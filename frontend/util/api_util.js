var ServerActions = require('../actions/server_actions');

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
  }
};

module.exports = ApiUtil;
