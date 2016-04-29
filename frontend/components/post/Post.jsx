var React = require('react');
var PostPicture = require('./PostPicture');
var PostHeader = require('./PostHeader');
var CommentIndex = require('./CommentIndex');
var CommentForm = require('./CommentForm');

var Post = React.createClass({
  render: function() {
    return (
      <article className='post'>
        <PostHeader post={this.props.post}/>
        <PostPicture post={this.props.post}/>
        <CommentIndex post={this.props.post} />
        <CommentForm post={this.props.post} />
      </article>
    );
  }
});

module.exports = Post;
