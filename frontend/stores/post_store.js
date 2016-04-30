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

var addComment = function(comment) {
  var post = _posts[comment.post_id];

  post.comments.push(comment);
};

var addLike = function(like) {
  var post = _posts[like.post_id];
  post.likes.push(like);
};

var deleteLike = function(like) {
  var post = _posts[like.post_id];
  var likeIdx = post.likes.indexOf(like);
  post.likes.splice(likeIdx, 1);
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
      break;
    case PostConstants.POST_RECEIVED:
      resetPosts(payload.post);
      break;
    case PostConstants.COMMENT_RECEIVED:
      addComment(payload.comment);
      break;
    case PostConstants.LIKE_RECEIVED:
      addLike(payload.like);
      break;
    case PostConstants.LIKE_REMOVED:
      deleteLike(payload.like);
      break;
    default:
  }
  PostStore.__emitChange();
};

module.exports = PostStore;
