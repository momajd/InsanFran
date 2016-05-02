var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants');
var ApiUtil = require('../util/api_util');

// TODO move these to client_actions & server_actions
var LikeActions = {
  createLike: function (likeData) {
    ApiUtil.createLike(likeData, this.receiveLike);
  },

  deleteLike: function (likeData) {
    ApiUtil.deleteLike(likeData, this.removeLike);
  },

  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;
