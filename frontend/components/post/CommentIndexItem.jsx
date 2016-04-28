var React = require('react');

var CommentIndexItem = React.createClass({
   render: function() {

     return (
       <div className="comment-index-item">
         <a href="TODO" className="comment-username">
           {this.props.comment.user}
         </a>
         <p className="comment-body">
           {this.props.comment.body}
         </p>
       </div>
     );
   }
});

module.exports = CommentIndexItem;
