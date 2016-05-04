var React = require('react');
var CommentInput = require('./CommentInput');
var LikeButton = require('./LikeButton');

var CommentForm = React.createClass({

  render: function() {
    return (
      <div className="comment-form">
        <LikeButton post={this.props.post}/>
        <CommentInput post={this.props.post} />
      </div>
    );
  }

});

module.exports = CommentForm;
