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
