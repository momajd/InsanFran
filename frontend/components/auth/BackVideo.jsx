var React = require('react');

var BackVideo = React.createClass({

  render: function () {
    var videoUrl = "https://s3.amazonaws.com/insanfran/insanfran.mp4";
    return (
      <div className='video-container'>
        <video autoPlay muted loop preload className="video">
         <source src={ videoUrl } type="video/mp4" />
         <source src={ videoUrl } type="video/webm" />
         <source src={ videoUrl } type="video/ogg" />
          Your browser does not support the <code>video</code> tag.
        </video>
      </div>
    );
  }
});

module.exports = BackVideo;
