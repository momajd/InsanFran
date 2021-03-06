var React = require('react');
var Modal = require('react-modal');
var ModalPostInfo = require('../profile/ModalPostInfo');
var PostStore = require('../../stores/post_store');
var ImageOverlay = require('./ImageOverlay');
var ClientActions = require('../../actions/client_actions');


var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return {modalOpen: false, post: {}, hover: false };
  },

  onChange: function() {
    this.setState({post: PostStore.getById(this.props.post.id)});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onChange);
    ClientActions.fetchPost(this.props.post.id);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  handleClick: function() {
    this.setState({modalOpen: true});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
  },

  mouseOver: function() {
    this.setState({hover: true});
  },

  mouseLeave: function(e) {
    this.setState({hover: false});
  },

  render: function() {
    var overlay;
    if (this.state.hover) {
      overlay = (
        <ImageOverlay handleClick={this.handleClick} mouseLeave={this.mouseLeave}
          post={this.props.post}/>
      );
    }

    return (
      <div className="profile-post-picture" onMouseOver={this.mouseOver}>
        <img src={this.props.post.image_url} onClick={this.handleClick}/>
        {overlay}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <div className="modal-picture">
            <img src={this.props.post.image_url} />
          </div>

          <ModalPostInfo post={this.state.post} />
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
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0px',
    height                     : '600px',
    width                      : '935px',
    overflow                   : 'none'
  }
};
