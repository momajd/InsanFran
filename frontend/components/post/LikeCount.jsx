var React = require('react');

var LikeCount = React.createClass({
  render: function() {
    debugger;
    return (
      <div>
        {this.props.post.likes.length}
      </div>
    );
  }
});

module.exports = LikeCount;
