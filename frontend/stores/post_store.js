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

var addPost = function(post) {
  _posts[post.id] = post;
};

var addComment = function(comment) {
  var post = _posts[comment.post_id];
  post.comments.push(comment);
};

var deleteComment = function(comment) {
  var post = _posts[comment.post_id];

  for (var i = 0; i < post.comments.length; i++) {
    if (post.comments[i].id === comment.id) {
      return post.comments.splice(i, 1);
    }
  }
};

var addLike = function(like) {
  var post = _posts[like.post_id];
  post.likes.push(like);
};

var deleteLike = function(like) {
  var post = _posts[like.post_id];
  var foundIdx;
  post.likes.forEach(function(postLike, i) {
    if (postLike.id === like.id) {
      foundIdx = i ;
    }
  });
  post.likes.splice(foundIdx, 1);
};

PostStore.all = function () {
  return Object.keys(_posts).map(function(id) {
    return _posts[id];
  });
};

PostStore.getById = function(postId) {
  return _posts[postId];
};

PostStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.POST_RECEIVED:
      addPost(payload.post);
      PostStore.__emitChange();
      break;
    case PostConstants.COMMENT_RECEIVED:
      addComment(payload.comment);
      PostStore.__emitChange();
      break;
    case PostConstants.COMMENT_REMOVED:
      deleteComment(payload.comment);
      PostStore.__emitChange();
      break;
    case PostConstants.LIKE_RECEIVED:
      addLike(payload.like);
      PostStore.__emitChange();
      break;
    case PostConstants.LIKE_REMOVED:
      deleteLike(payload.like);
      PostStore.__emitChange();
      break;
  }
};

module.exports = PostStore;
