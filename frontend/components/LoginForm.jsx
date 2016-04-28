var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

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

	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},

	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},

	errors: function(){
		if (!this.state.userErrors){
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
		if (this.state.currentUser) {
			return;
		}
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
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
