import Modal from 'components/Modal';
import { Component } from 'react';
import { Image } from './ImageCard.styled';
import PropTypes from 'prop-types';

export default class ImageCard extends Component {
  state = {
    isModal: false,
  };

  toggleModal = () => {
    this.setState(({ isModal }) => ({
      isModal: !isModal,
    }));
  };

  render() {
    const { hit } = this.props;
    const { isModal } = this.state;

    return (
      <>
        <Image
          src={hit.webformatURL}
          alt={hit.tags}
          onClick={this.toggleModal}
        />
        {isModal && (
          <Modal onClose={this.toggleModal}>
            <img src={hit.largeImageURL} alt={hit.tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageCard.propTypes = {
  hit: PropTypes.exact({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
