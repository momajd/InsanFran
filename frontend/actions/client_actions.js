var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchAllPosts: ApiUtil.fetchAllPosts,

  createComment: function(comment){
    ApiUtil.createComment(comment);
  }
};

module.exports = ClientActions;
