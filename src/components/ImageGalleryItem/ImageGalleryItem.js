import ImageCard from 'components/ImageCard/ImageCard';
import { Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryDataView({ hits }) {
  return hits.map(hit => (
    <Item key={hit.id}>
      <ImageCard hit={hit} />
    </Item>
  ));
}

ImageCard.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
