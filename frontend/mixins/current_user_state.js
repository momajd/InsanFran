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
		debugger;
		//if current user exists, redirect to root
		if (!$.this.state.currentUser.isEmptyObject) {
			debugger;
			window.location = "/";
		}
	}
};

module.exports = CurrentUserState;
