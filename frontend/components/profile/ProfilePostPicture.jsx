var React = require('react');

var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return {modalIsOpen: false};
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  getPictureHover: function() {

    return (
      <div onClick={this.openModal} className="picture-hover">

      </div>
    )
  },

  render: function() {
    return (
      <div className = "profile-post-picture">
        <img src={this.props.post.image_url} />
      </div>
    );
  }
});

module.exports = ProfilePostPicture;
