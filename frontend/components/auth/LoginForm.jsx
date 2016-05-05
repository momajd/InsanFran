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

	errors: function(){
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i} className="error-message">{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},

	form: function(){
		return(
				<form onSubmit={this.handleSubmit} className="login-form">
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
              className="login-signup-button"
              onClick={this.handleLogin}>
              Sign In
            </button>

            <button
              className="login-signup-button"
              onClick={this.handleSignUp}>
              Sign Up
            </button>
					</section>

					<section>
            <button
              className="guest-button"
              onClick={this.handleGuest}>
              Log In As Guest
            </button>
          </section>

				</form>
			);
	},

	render: function(){
		return (
			<div className="login-content">
				<header><h1 className="login-logo">InsanFran</h1></header>
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
