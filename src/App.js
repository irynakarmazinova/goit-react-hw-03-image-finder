import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import './App.css';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    searchImageName: '',
  };

  handleFormSubmit = searchImageName => {
    this.setState({ searchImageName });
  };

  render() {
    const { searchImageName } = this.state;
    const { handleFormSubmit } = this;

    return (
      <div className="App">
        {/* в Searchbar передаю проп submit(имя пропса), куда я передаю ссылку на метод handleFormSubmit */}
        <ToastContainer />

        <Searchbar submit={handleFormSubmit} />
        <ImageGallery searchImageName={searchImageName} />
        {/* <Button /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;

// --------------------
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// Your API key is: 22935349-f238c1b9d1a1a29229f76f105

// API - bk
