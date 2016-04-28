var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../../actions/user_actions");
var CurrentUserState = require("../../mixins/current_user_state");
var UserStore = require('../../stores/user_store');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],

  handleLogin: function(e){
    e.preventDefault();
    UserActions.login({
      username: this.state.username,
      password: this.state.password
    });
  },

  handleSignUp: function(e){
    e.preventDefault();
    UserActions.signup({
      username: this.state.username,
      password: this.state.password
    });
  },

  handleGuest: function(e){
    e.preventDefault();
    UserActions.login({
      username: "guest",
      password: "password"
    });
  },

// TODO: clean up errors
	errors: function(){
		if (UserStore.isLoggedIn()){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},

	form: function(){
		return(
				<form onSubmit={this.handleSubmit}>
					<section>
						<input
                type="text"
                placeholder="Username"
                valueLink={this.linkState("username")}/>
            <br/>

						<input
              type="password"
              placeholder="Password"
              valueLink={this.linkState("password")}/>
					</section>

          <section>
            <button
              className="login-button"
              onClick={this.handleLogin}>
              Sign In
            </button>

            <button
              className="signup-button"
              onClick={this.handleSignUp}>
              Sign Up
            </button>

            <button
              className="guest-button"
              onClick={this.handleGuest}>
              Guest
            </button>
          </section>

				</form>
			);
	},

	render: function(){
		return (
			<div id="login-form">
				<header><h1>InsanFran</h1></header>
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
