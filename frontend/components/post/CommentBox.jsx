var React = require('react');
var CommentForm = require('./CommentForm');
var CommentIndex = require('./CommentIndex');
var CommentIndexItem = require('./CommentIndexItem');
var LikeCount = require('./LikeCount');
var LikeButton = require('./LikeButton');

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className="comment-box">
        <LikeCount post={this.props.post}/>
        <LikeButton post={this.props.post}/>
        <CommentIndex post={this.props.post} />
        <CommentForm post={this.props.post} />
      </div>
    );
  }

});

module.exports = CommentBox;
