var React = require('react');
var ClientActions = require('../../actions/client_actions');
var UserStore = require('../../stores/user_store');

var CommentIndexItem = React.createClass({

  deleteComment: function() {
    var comment = this.props.comment;
    ClientActions.deleteComment(comment);
  },

   render: function() {
     var deleteButton; //only make available to current user's comments
     if (UserStore.currentUser().id === this.props.comment.user_id) {
       deleteButton = (
         <i className="fa fa-times" onClick={this.deleteComment}></i>
       );
     }

     return (
       <div className="comment-index-item">
         <a
           href={"#users/" + this.props.comment.user_id}
           className="comment-username">
           {this.props.comment.user}
         </a>

         <p className="comment-body">
           {this.props.comment.body}
         </p>

         {deleteButton}
       </div>
     );
   }
});

module.exports = CommentIndexItem;
