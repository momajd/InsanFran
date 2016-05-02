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

UserIndexStore.all = function() {
  return Object.assign({}, _users);
};

UserIndexStore.findById = function (id) {
  return _users[id];
};

UserIndexStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserIndexConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      break;
    case UserIndexConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;
    case UserIndexConstants.FOLLOW_RECEIVED:
      addFollower(payload.relationship);
      break;
    case UserIndexConstants.FOLLOW_REMOVED:
      removeFollower(payload.relationship);
      break;
  }
  UserIndexStore.__emitChange();
};

module.exports = UserIndexStore;
