import React from 'react';

const ImageGalleryItem = image => {
  {
    image.map(({ webformatURL, largeImageURL, id, name }) => (
      <li className="ImageGalleryItem" key={id}>
        <img src={webformatURL} alt={name} className="ImageGalleryItem-image" />
      </li>
    ));
  }
};

export default ImageGalleryItem;
