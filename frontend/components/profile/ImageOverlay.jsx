var React = require('react');

var ImageOverlay = React.createClass({
  render: function() {
    return (
      <div className="profile-post-overlay"
        onMouseLeave={this.props.mouseLeave}
        onClick={this.props.handleClick}>

        <div className="overlay-stats">
          <div>
            <i className="fa fa-heart"></i>&nbsp;
            {this.props.post.likes.length}
          </div>
          <div>
            <i className="fa fa-comment"></i>&nbsp;
            {this.props.post.comments.length}
          </div>
        </div>

      </div>
    );
  }
});

module.exports = ImageOverlay;
