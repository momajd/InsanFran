var React = require('react');
var CommentIndexItem = require('./CommentIndexItem');

var CommentIndex = React.createClass({

   render: function() {
     var self = this;
     var comments = this.props.post.comments.map(function(comment) {
       return (
         <CommentIndexItem
            key={comment.id}
            post={self.props.post}
            comment={comment} />
        );
     });

     return (
       <div className="comment-index-box">
         {comments}
       </div>
     );
   }
});

module.exports = CommentIndex;
