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
    const { handleBackdropClick } = this;

    return (
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  activeImg: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
