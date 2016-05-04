var React = require('react');

var ModalHeader = React.createClass({
  render: function(){
    return (
      <header className="modal-post-header">
        <a className="post-header-username"
           href={"#/users/" + this.props.post.user_id}>
          {this.props.post.username}
        </a>

        <div className="post-timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
    );
  }
});

module.exports = ModalHeader;
