var React = require('react');
var PostHeader = require('../post/PostHeader');
var CommentBox = require('../post/CommentBox');

var ModalPostInfo = React.createClass({

  render: function() {
    return (
      <div className="modal-post-info">
        <PostHeader post={this.props.post}/>
        <CommentBox post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPostInfo;
