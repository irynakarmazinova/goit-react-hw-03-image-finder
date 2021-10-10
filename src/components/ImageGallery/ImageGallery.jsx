import React, { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

const API_KEY = '22935349-f238c1b9d1a1a29229f76f105';

const Status = {
  IDLE: 'idle', //  простой, стоит и ничего не делает
  PENDING: 'pending', // ожидается выполнение
  RESOLVED: 'resolved', // выполнилось с результатом хорошо
  REJECTED: 'rejected', // отклонено
};

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  // componentDidMount() {для фетча}

  // когда компонент обновляется
  componentDidUpdate(prevProps, prevState) {
    const { searchImageName } = this.props;

    // всегда нужно делать проверку, потому что может зациклить компонент!
    // предыдущий пропс имг и следующий(текущий) пропс имг
    // старый рендет-новый рендер
    if (prevProps.searchImageName !== searchImageName) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${searchImageName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There is no picture with ${searchImageName} name`),
          );
        })
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <div className="errorMessage">Please enter your request</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
      // return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem image={image} />
          {/* {image.map((img => ({
            <ImageGalleryItem key={ image.id} (...image) />
          })))} */}
        </ul>
      );
    }
  }
}

export default ImageGallery;
