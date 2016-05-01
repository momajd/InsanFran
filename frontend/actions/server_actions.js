var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var UserIndexConstants = require('../constants/user_index_constants');

var ServerActions = {
  receieveAllUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserIndexConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveAllPosts: function(posts) {
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
  }
};

module.exports = ServerActions;
