var React = require('react');
var CommentIndex = require('./CommentIndex');
var LikeCount = require('./LikeCount');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className="comment-box">
        <LikeCount post={this.props.post}/>
        <CommentIndex post={this.props.post} />
        <CommentForm post={this.props.post} />
      </div>
    );
  }

});

module.exports = CommentBox;
