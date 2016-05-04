var React = require('react');

var PostHeader = React.createClass({
  render: function(){
    return (
      <header className="post-header">
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

module.exports = PostHeader;

// Tim Demo
// <header className="post-header">
//   <a className="post-header+" style={{thing1: 100, thing2: 200}}
//      href={"#/users/" + this.props.post.user_id}>
//     {this.props.post.username}
//   </a>
//
//   <div className="post-timestamp">
//     {this.props.post.created_time_ago}
//   </div>
// </header>
