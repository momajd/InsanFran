// NB: this store is only for keeping track of Auth; see user_search_store
// for all Users
var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser = {};
var  _errors = [];

UserStore.login = function(user){
	_currentUser = user;
  _errors = [];
};

UserStore.logout = function(){
  _currentUser = {};
  _errors = [];
};

UserStore.isLoggedIn = function() {
	return Object.keys(_currentUser).length !==0 ;
};

UserStore.currentUser = function(){
  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.user);
			UserStore.__emitChange();
      break;
    case "LOGOUT":
    	UserStore.logout();
			UserStore.__emitChange();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
			UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
