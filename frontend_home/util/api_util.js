var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchAllPosts: function(){
    $.ajax({
      url: 'api/posts',
      success: function(posts){
        ServerActions.receiveAllPosts(posts);
      }
    });
  }
};

module.exports = ApiUtil;
