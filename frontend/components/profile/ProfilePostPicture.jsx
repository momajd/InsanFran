var React = require('react');
var Modal = require('react-modal');
var ModalHeader = require('../profile/ModalHeader');
var CommentIndex = require('../post/CommentIndex');

var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return {modalOpen: false};
  },

  _handleClick: function() {
    this.setState({modalOpen: true});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
  },

  render: function() {
    return (
      <div className="profile-post-picture">
        <img src={this.props.post.image_url} onClick={this._handleClick}/>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <div className="modal-picture">
            <img src={this.props.post.image_url} />
          </div>

          <ModalHeader post={this.props.post} />
        </Modal>
      </div>
    );
  }
});

module.exports = ProfilePostPicture;

var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.5)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'row',
    border                     : 'none',
    background                 : 'none',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0px',
    height                     : '600px',
    width                      : '935px',
    overflow                   : 'none'
  }
};
