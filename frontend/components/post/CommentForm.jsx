var React = require('react');
var ApiUtil = require('../../util/api_util/');
var PostStore = require('../../stores/post_store');

var CommentForm = React.createClass({
  getInitialState: function() {
    return { body: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
  }
});

module.exports = CommentForm;
