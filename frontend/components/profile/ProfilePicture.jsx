var React = require('react');
var UserStore = require('../../stores/user_store');

var ProfilePicture = React.createClass({

  getInitialState: function() {
    return {disabled: this.props.user.id !== this._currentUserId() };
  },

  handleUploadPicture: function (e) {
    e.preventDefault();
    if (this.props.user.id !== this._currentUserId() ) {return;}

    var settings = Object.assign({}, window.cloudinary_options);
    settings["theme"] = "white";
    settings["thumbnails"] = ".upload-field";
    settings["thumbnail_transformation"] = "w_300,h_250,c_fill";

    cloudinary.openUploadWidget(settings,
      function(error, images) {

      }
    );
  },

  _currentUserId: function() {
    return UserStore.currentUser().id;
  },

  render: function() {
    // TODO: wtf why is this url so big
    var emptyImageUrl = "http://res.cloudinary.com/dfqqsmub8/image/upload/w_200,h_200,c_thumb,g_face,r_max/empty_image.jpg";
    var url = this.props.user.profile_image_url || emptyImageUrl;

    return (
      <button >
        <img title="Change Profile Picture" src={url} />
      </button>
    );
  }

});

module.exports = ProfilePicture;
