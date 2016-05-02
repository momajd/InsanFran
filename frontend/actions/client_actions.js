var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchAllUsers: function() {
    ApiUtil.fetchAllUsers();
  },

  fetchUser: function(userId) {
    ApiUtil.fetchUser(userId);
  },

  fetchAllPosts: function() {
    ApiUtil.fetchAllPosts();
  },

  createPost: function(post) {
    ApiUtil.createPost(post);
  },

  createComment: function(comment){
    ApiUtil.createComment(comment);
  },

  createFollow: function(follow) {
    ApiUtil.createFollow(follow);
  },

  deleteFollow: function(follow) {
    ApiUtil.deleteFollow(follow);
  }

};

module.exports = ClientActions;
