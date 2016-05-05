var React = require('react');
var ClientActions = require('../../actions/client_actions');
var UserStore = require('../../stores/user_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CommentInput = React.createClass({
  mixins: [LinkedStateMixin],

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

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="comment-field"
            type="text"
            placeholder="Add a comment..."
            valueLink={this.linkState('body')} />
        </form>
      </div>
    );
  }

});

module.exports = CommentInput;
