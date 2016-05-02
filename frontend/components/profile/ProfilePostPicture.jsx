var React = require('react');

var ProfilePostPicture = React.createClass({

  render: function() {
    return (
      <div className = "profile-post-picture">
        <img src={this.props.post.image_url} />
      </div>
    );
  }
});

module.exports = ProfilePostPicture;
