import { Component } from 'react';
import ImageGaleryErrorView from '../ImageGaleryErrorView/ImageGaleryErrorView';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImageGalleryPedingView from '../ImageGalleryPedingView/ImageGalleryPedingView';
import * as API from '../../service/api';
import { Button, ImageGellery } from './ImageGallery.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    capture: null,
    images: [],
    error: null,
    isLoading: false,
    showLoadMore: false,
    currentPage: 1,
    showModal: false,
  };

  optimaizerImageList = images => {
    return images.map(({ id, tags, largeImageURL, webformatURL }) => ({
      id,
      tags,
      largeImageURL,
      webformatURL,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgInfo;
    const nextImg = this.props.imgInfo;

    if (prevImg !== nextImg) {
      this.state.currentPage = 1;
      this.state.capture = null;
      this.state.images = [];
      this.state.error = false;
    }

    const prevPage = prevState.currentPage;
    const { currentPage } = this.state;

    if (prevImg !== nextImg || prevPage !== currentPage) {
      try {
        this.setState({ isLoading: true });

        const capture = await API.getImages(nextImg, currentPage);

        const totalPages = Math.ceil(capture.totalHits / 12);

        if (capture.total === 0) {
          throw new Error(`Oops! "${nextImg}" - нема таких світлин`);
        }

        capture &&
          toast.success(
            `Знайдено ${capture.totalHits} світлин. Завантажено: ${currentPage} з ${totalPages} сторінок.`
          );

        const optimalImages = this.optimaizerImageList(capture.hits);

        this.setState(state => ({
          capture: capture,
          images: [...state.images, ...optimalImages],
          isLoading: false,
          showLoadMore: totalPages === currentPage ? false : true,
        }));
      } catch (error) {
        this.setState({ error: error, isLoading: false, showLoadMore: false });

        toast.error(`${error}`);

        console.log('error', error);
      }
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { capture, error, isLoading, showLoadMore, images } = this.state;
    return (
      <>
        {error && <ImageGaleryErrorView message={error.message} />}

        {capture !== null && (
          <ImageGellery>
            <ImageGalleryItem hits={images} onClick={this.toggleModal} />
          </ImageGellery>
        )}

        {isLoading && <ImageGalleryPedingView />}

        {showLoadMore && (
          <Button
            type="button"
            disabled={!showLoadMore}
            onClick={this.handleClick}
          >
            Загрузити ще
          </Button>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imgInfo: PropTypes.string.isRequired,
};
