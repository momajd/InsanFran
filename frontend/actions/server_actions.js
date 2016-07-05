var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var UserIndexConstants = require('../constants/user_index_constants');

var ServerActions = {
  receiveAllUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserIndexConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserIndexConstants.USER_RECEIVED,
      user: user
    });
  },

  receivePosts: function(posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receivePost: function(post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  receiveComment: function(comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  removeComment: function(comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_REMOVED,
      comment: comment
    });
  },

  receiveFollow: function(relationship) {
    AppDispatcher.dispatch({
      actionType: UserIndexConstants.FOLLOW_RECEIVED,
      relationship: relationship
    });
  },

  removeFollow: function(relationship) {
    AppDispatcher.dispatch({
      actionType: UserIndexConstants.FOLLOW_REMOVED,
      relationship: relationship
    });
  }
};

module.exports = ServerActions;
