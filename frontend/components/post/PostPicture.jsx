var React = require('react');

var PostPicture = React.createClass({

  render: function() {
    return (
      <div className = "post-picture">
        <img className = "picture" src={this.props.post.image_url} />
      </div>
    );
  }
});

module.exports = PostPicture;
