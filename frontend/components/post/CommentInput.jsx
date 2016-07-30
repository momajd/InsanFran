var React = require('react');
var ClientActions = require('../../actions/client_actions');
var UserStore = require('../../stores/user_store');

var CommentInput = React.createClass({
  
  getInitialState: function() {
    return { body: ""};
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var commentData = {
      user_id: UserStore.currentUser().id,
      post_id: this.props.post.id,
      body: this.state.body
    };
    ClientActions.createComment(commentData);
    this.setState({body: ""});
  },

  handleDelete: function() {
    var commentData = {
      user_id: UserStore.currentUser().id
    };
  },

  handleBodyChange: function(e) {
    this.setState({body: e.target.value});
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="comment-field"
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleBodyChange}
            value={this.state.body} />
        </form>
      </div>
    );
  }

});

module.exports = CommentInput;
