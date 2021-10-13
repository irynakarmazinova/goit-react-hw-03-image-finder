import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import './App.css';

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
        <ToastContainer />

        {/* в Searchbar передаю проп submit(имя пропса), куда я передаю ссылку на метод handleFormSubmit */}
        <Searchbar submit={handleFormSubmit} />

        <ImageGallery searchImageName={searchImageName} />
      </div>
    );
  }
}

export default App;

// --------------------
// API - bk

// const fn = a => {
//   return console.log(a);
// };
// fn('2');
// fn('a');
