var React = require('react');

// TODO: update links when profile page is made

var PostHeader = React.createClass({
  render: function(){
    return (
      <header className="post-header">
        <a href={"#"}>{this.props.post.username}</a>
      </header>
    );
  }
});

module.exports = PostHeader;
