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
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
