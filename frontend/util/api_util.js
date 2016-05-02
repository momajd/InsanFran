var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchAllUsers: function() {
		$.ajax({
			url: '/users',
			success: function(users) {
				ServerActions.receiveAllUsers(users);
			}
		});
	},

  fetchUser: function(userId) {
    $.ajax({
      url: '/users/' + userId,
      success: function(userData) {
        ServerActions.receiveUser(userData);
      }
    });
  },

  fetchAllPosts: function(){
    $.ajax({
      url: 'api/posts',
      success: function(posts){
        ServerActions.receiveAllPosts(posts);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      url: "/api/posts/",
      type: "POST",
      data: {post: post},
      success: function (postData) {
        ServerActions.receivePost(postData);
      }
    });
  },

  createComment: function(comment) {
    $.ajax({
      url: "api/posts/" + comment.post_id + "/comments",
      type: "POST",
      data: {comment: comment},
      success: function (commentData) {
        ServerActions.receiveComment(commentData);
      }
    });
  },

  createLike: function(like, success) {
    $.ajax({
      url: "api/posts/" + like.post_id + "/likes",
      type: "POST",
      data: {like: like},
      success: success
    });
  },

  deleteLike: function(like, success) {
    $.ajax({
      url: "api/posts/" + like.post_id + "/likes/" + like.id,
      type: "DELETE",
      data: {like: like},
      success: success
    });
  },

  createFollow: function(relationship) {
    $.ajax({
      url: "api/relationships",
      type: "POST",
      data: {relationship: relationship},
      success: function(relationshipData) {
        ServerActions.receiveFollow(relationshipData);
      }
    });
  },

  deleteFollow: function(relationship) {
    $.ajax({
      url: "api/relationships/" + relationship.id,
      type: "DELETE",
      data: {relationship: relationship},
      success: function(relationshipData) {
        ServerActions.removeFollow(relationshipData);
      }
    });
  }
};

module.exports = ApiUtil;
