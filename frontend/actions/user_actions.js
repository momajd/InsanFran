var UserConstants = require('../constants/user_constants');
var UserApiUtil = require('../util/user_api_util');
var UserStore = require('../stores/user_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserActions = {
	fetchCurrentUser: function(){
    // receiveCurrentUser gets passed to the ajax request as the success callback
    // handleError gets passed to the ajax request as the error callback
		UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
	},

	signup: function(user){
		UserApiUtil.post({
			url: "/api/user",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},

	login: function(user){
		UserApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},

	receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
			user: user
		});
	},

// TODO: not all error messages are going through; figure out why
	handleError: function(error) {
		// debugger;
		AppDispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},

	removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT,
		});
	},

	logout: function(){
		UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	}
};

module.exports = UserActions;
