var React = require('react');
var ProfilePicture = require('../profile/ProfilePicture');

var PostHeader = React.createClass({
  render: function(){
    
    return (
      <header className="post-header">
        <ProfilePicture user={this.props.post.user} />

        <a className="post-header-username"
           href={"#/users/" + this.props.post.user_id}>
          {this.props.post.user.username}
        </a>

        <div className="post-timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
    );
  }
});

module.exports = PostHeader;
