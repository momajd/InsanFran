var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserIndexConstants = require('../constants/user_index_constants');

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
  }
  UserIndexStore.__emitChange();
};

module.exports = UserIndexStore;
