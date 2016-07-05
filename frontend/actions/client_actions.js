var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchAllUsers: function() {
    ApiUtil.fetchAllUsers();
  },

  fetchUser: function(userId) {
    ApiUtil.fetchUser(userId);
  },

  fetchPosts: function(count) {
    ApiUtil.fetchPosts(count);
  },

  fetchPost: function(postId) {
    ApiUtil.fetchPost(postId);
  },

  createPost: function(post) {
    ApiUtil.createPost(post);
  },

  createComment: function(comment){
    ApiUtil.createComment(comment);
  },

  deleteComment: function(comment) {
    ApiUtil.deleteComment(comment);
  },

  createFollow: function(relationship) {
    ApiUtil.createFollow(relationship);
  },

  deleteFollow: function(relationship) {
    ApiUtil.deleteFollow(relationship);
  },

  updateProfileImageUrl: function(url, userId) {
    ApiUtil.updateProfileImageUrl(url, userId);
  }

};

module.exports = ClientActions;
