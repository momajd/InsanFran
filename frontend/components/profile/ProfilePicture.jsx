var React = require('react');
var UserStore = require('../../stores/user_store');
var ClientActions = require('../../actions/client_actions');

var ProfilePicture = React.createClass({

  handleUploadPicture: function (e) {
    e.preventDefault();
    if (this.props.user.id !== this.currentUserId() ) {
      // take current user to the user's show page
      window.location = "/#/users/" + this.props.user.id;
    } else {
      // allow user to change their profile picture
      var settings = Object.assign({}, window.cloudinary_options);
      settings["theme"] = "white";
      settings["thumbnails"] = ".upload-field";
      settings["thumbnail_transformation"] = "w_300,h_250,c_fill";

      var self = this;
      cloudinary.openUploadWidget(settings,
        function(error, images) {
          var url = images[0].url;

          ClientActions.updateProfileImageUrl(url, self.currentUserId() );
        }
      );
    }

  },

  currentUserId: function() {
    return UserStore.currentUser().id;
  },

  render: function() {
    var emptyImageUrl = "http://res.cloudinary.com/dfqqsmub8/image/upload/w_200,h_200,c_thumb,g_face/empty_image.jpg";
    var url = this.props.user.profile_image_url || emptyImageUrl;

    return (
        <img className="profile-image"
             onClick={this.handleUploadPicture}
             src={url}>
        </img>
    );
  }

});

module.exports = ProfilePicture;
