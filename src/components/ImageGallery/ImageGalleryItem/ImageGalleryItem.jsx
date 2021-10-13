import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  image: { webformatURL, tags },
  image,
  onModalOpen,
}) => (
  <li className="ImageGalleryItem" onClick={() => onModalOpen(image)}>
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
