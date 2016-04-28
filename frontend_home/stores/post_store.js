var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants');

var PostStore = new Store(AppDispatcher);

var _posts = {};

var resetPosts = function(posts) {
  _posts = {};
  posts.forEach(function(post) {
    _posts[post.id] = post;
  });
};

PostStore.all = function () {
  return Object.keys(_posts).map(function(id) {
    return _posts[id];
  });
};

PostStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    default:

  }
};

module.exports = PostStore;
