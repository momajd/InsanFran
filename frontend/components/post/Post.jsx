var React = require('react');
var PostPicture = require('./PostPicture');
var PostHeader = require('./PostHeader');

var Post = React.createClass({
  render: function() {
    return (
      <article>
        <PostHeader post={this.props.post}/>
        <PostPicture post={this.props.post}/>
      </article>
    );
  }
});

module.exports = Post;
