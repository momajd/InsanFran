var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserIndexConstants = require('../constants/user_index_constants');
var UserStore = require('./user_store');

var UserIndexStore = new Store(AppDispatcher);

var _users = {};

var resetUsers = function(users) {
  _users = {};

  users.forEach(function(user) {
    _users[user.id] = user;
  });
};

var resetUser = function(user) {
  _users[user.id] = user;
};

var addFollower = function(relationship) {
  var user = _users[relationship.followed_id];
  user.followers.push(UserStore.currentUser() );
};

var removeFollower = function(relationship) {
  var user = UserIndexStore.findById(relationship.followed_id);
  var followerIdx = user.followers.indexOf(UserStore.currentUser() );
  user.followers.splice(followerIdx, 1);
};

// See FollowButton component
UserIndexStore.userIsFollowed = function(user) {
  var currentUser = UserStore.currentUser();
  var isFollowed = false;

  user.followers.forEach(function(follower) {
    if (follower.id === currentUser.id) {
      isFollowed = true;
    }
  });
  return isFollowed;
};

UserIndexStore.all = function() {
  return Object.assign({}, _users);
};

UserIndexStore.findById = function (id) {
  return _users[id];
};

// TODO: filter should be done on the back end
UserIndexStore.filterSearch = function(searchInput) {
  var searchResults = [];

  Object.keys(_users).forEach(function(id) {
    if (_users[id].username.includes(searchInput) ) {
      searchResults.push(_users[id]);
    }
  });
  return searchResults;
};

UserIndexStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserIndexConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UserIndexStore.__emitChange();
      break;
    case UserIndexConstants.USER_RECEIVED:
      resetUser(payload.user);
      UserIndexStore.__emitChange();
      break;
    case UserIndexConstants.FOLLOW_RECEIVED:
      addFollower(payload.relationship);
      UserIndexStore.__emitChange();
      break;
    case UserIndexConstants.FOLLOW_REMOVED:
      removeFollower(payload.relationship);
      UserIndexStore.__emitChange();
      break;
  }
};

module.exports = UserIndexStore;
