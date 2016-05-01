var React = require('react');
var ClientActions = require('../actions/client_actions');

var UploadButton = React.createClass({
  upload: function(event) {
    event.preventDefault();

    cloudinary.openUploadWidget(window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          var post = {image_url: images[0].url};
          ClientActions.createPost(post);
        }
      });
  },

  render: function() {
    return (
      <button onClick={this.upload}>Upload Image</button>
    );
  }

});

module.exports = UploadButton;