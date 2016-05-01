var React = require('react');

var ProfilePicture = React.createClass({

  render: function() {
    // TODO: wtf why is this url so big
    var emptyImageUrl = "http://res.cloudinary.com/dfqqsmub8/image/upload/c_crop,g_face,r_max/v1462063543/11906329_960233084022564_1448528159_a_juqoyo.jpg";
    var url = this.props.user.profile_image_url || emptyImageUrl;

    return (
      <button >
        <img title="Change Profile Picture" src={url} />
      </button>
    );
  }

});

module.exports = ProfilePicture;
