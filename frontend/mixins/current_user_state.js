// this mixin will be added to any component that needs to keep track of the
// the current user

var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},

	componentDidMount: function(){
		UserStore.addListener(this.updateUser);
	},

	updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});

		//if current user exists and we are at the register page, redirect to root
		if (UserStore.isLoggedIn() && window.location.pathname === "/register") {
			window.location = "/";
		} else if (!UserStore.isLoggedIn() && window.location.pathname === "/"){
			window.location = "/register";
		}
	}
};

module.exports = CurrentUserState;
