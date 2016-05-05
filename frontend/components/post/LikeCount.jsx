var React = require('react');

var LikeCount = React.createClass({
  likeCount: function () {
    if (this.props.post.likes.length < 1) {
      return (" ");
    } else if (this.props.post.likes.length === 1) {
      return ("1 like");
    } else {
      return (this.props.post.likes.length + " likes");
    }
  },

  render: function() {
    return (
      <div className="like-count">
        {this.likeCount()}
      </div>
    );
  }
});

module.exports = LikeCount;
