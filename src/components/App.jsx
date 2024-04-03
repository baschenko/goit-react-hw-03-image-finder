import React, { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgName: '',
  };

  onSubmitSearchbar = imgName => {
    this.setState({ imgName });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmitSearchbar} />
        <ImageGallery imgInfo={this.state.imgName} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    );
  }
}
