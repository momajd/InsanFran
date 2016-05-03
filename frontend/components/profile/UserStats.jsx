var React = require('react');
var UserIndexStore = require('../../stores/user_index_store');

var UserStats = React.createClass({

  render: function() {
    var stats;
    if (Object.keys(this.props.user).length < 1) {
      stats = <div></div>;
    } else {
      stats = (
        <div className="user-stats">
          <div>
            <span className="user-stats-number">
              {this.props.user.posts.length}
            </span>
            <span className="user-stats-text">
              {" "} Posts
            </span>
          </div>
          <div>
            <span className="user-stats-number">
              {this.props.user.followers.length}
            </span>
            <span className="user-stats-text">
              {" "} Followers
            </span>
          </div>
          <div>
            <span className="user-stats-number">
              {this.props.user.following.length}
            </span>
            <span className="user-stats-text">
              {" "} Following
            </span>
          </div>
        </div>
      );
    }

    return (stats);
  }

});

module.exports = UserStats;
