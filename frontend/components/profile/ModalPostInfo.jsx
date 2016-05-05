var React = require('react');
var ModalHeader = require('./ModalHeader');

var ModalPostInfo = React.createClass({

  render: function() {
    return (
      <div className="modal-post-info">
        <ModalHeader post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPostInfo;
