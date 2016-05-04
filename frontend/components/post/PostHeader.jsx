var React = require('react');

var PostHeader = React.createClass({
  render: function(){
    return (
      <header className="post-header">
        <a className="post-header-username"
           href={"#/users/" + this.props.post.user_id}>
          {this.props.post.username}
        </a>

        <div className="post-timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
    );
  }
});

module.exports = PostHeader;
