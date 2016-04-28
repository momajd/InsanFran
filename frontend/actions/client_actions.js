var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchAllPosts: ApiUtil.fetchAllPosts,

  createComment: ApiUtil.createComment
};

module.exports = ClientActions;
