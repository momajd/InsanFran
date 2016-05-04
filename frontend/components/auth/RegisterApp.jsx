var React = require('react');
var LoginForm = require('./LoginForm');

var RegisterApp = React.createClass({
  render: function() {
    return (
      <div className="register-page">
        <LoginForm />
      </div>
    );
  }
});

module.exports = RegisterApp;

// <video poster="" autoPlay loop>
//   <source src="http://res.cloudinary.com/dfqqsmub8/video/upload/v1462254155/aerial-sunset-san-quentin-san-francisco-bay-usa_vjggd1xhg__WL_eegrll.mp4" type="video/mp4" />
// </video>
