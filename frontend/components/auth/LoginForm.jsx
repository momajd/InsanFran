var React = require("react");
var UserActions = require("../../actions/user_actions");
var CurrentUserState = require("../../mixins/current_user_state");
var UserStore = require('../../stores/user_store');

var LoginForm = React.createClass({
	mixins: [CurrentUserState],

	getInitialState: function() {
		return {username: "", password: ""};
	},

  handleLogin: function(e){
		// there will be no event for the guest login
		if (e) {e.preventDefault(); }

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

		this.setState({username: "", password: ""});

		var username = "guest".split("");
		var password = "password".split("");
		var time = 50;

		var self = this;
		username.forEach(function(letter) {
			time += 100;
			setTimeout(function() {
				self.setState({username: self.state.username + letter});
			}, time);
		});

		time += 400;

		password.forEach(function(letter) {
			time += 100;
			setTimeout(function() {
				self.setState({password: self.state.password + letter});
			}, time);
		});

		time += 400;

		setTimeout(this.handleLogin, time);
  },

	handleUsernameChange: function (e) {
		this.setState({username: e.target.value});
	},

	handlePasswordChange: function (e) {
		this.setState({password: e.target.value});
	},

	errors: function(){
		var self = this;
		if (this.state.userErrors) {
			return (<ul>
				{
					Object.keys(this.state.userErrors).map(function(key, i){
						return (<li key={i} className="error-message">{self.state.userErrors[key]}</li>);
					})
				}
			</ul>);
		}
	},

	form: function(){
		return(
				<form onSubmit={this.handleSubmit} className="login-form">
					<section>
						<input
                placeholder="Username"
                onChange={this.handleUsernameChange}
								value={this.state.username}/>
            <br/>

						<input
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
							value={this.state.password}/>
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

	componentDidMount: function() {
    $('.login-logo, .login-message, .login-form').hide();
		$('.login-logo').fadeIn("slow");

		setTimeout(function() {
			$('.login-message').fadeIn("slow");
		}, 250);

		setTimeout(function() {
			$('.login-form').fadeIn("slow");
		}, 500);
	},

	render: function(){
		return (
			<div className="login-content">
				<header>
					<h1 className="login-logo">InsanFran</h1>
					<p className="login-message">A place for San Francisco Photography</p>
				</header>
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
