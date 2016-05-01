var React = require('react');

var PostHeader = React.createClass({
  render: function(){
    return (
      <header className="post-header">
        <a href={"#/users/" + this.props.post.user_id}>
          {this.props.post.username}
        </a>
      </header>
    );
  }
});

module.exports = PostHeader;
