var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchAllPosts: function() {
    ApiUtil.fetchAllPosts();
  },

  createPost: function(post) {
    ApiUtil.createPost(post);
  },

  createComment: function(comment){
    ApiUtil.createComment(comment);
  }
};

module.exports = ClientActions;
