var React = require('react');
var PostPicture = require('./PostPicture');
var PostHeader = require('./PostHeader');
var CommentBox = require('./CommentBox');

var Post = React.createClass({
  render: function() {
    return (
      <article className='post'>
        <PostHeader post={this.props.post}/>
        <PostPicture post={this.props.post}/>
        <CommentBox post={this.props.post} />
      </article>
    );
  }
});

module.exports = Post;
