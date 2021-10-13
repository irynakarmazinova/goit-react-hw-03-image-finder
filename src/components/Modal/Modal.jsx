import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onModalClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const {
      activeImg: { largeImageURL, tags },
    } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} className="modalImg" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  activeImg: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
