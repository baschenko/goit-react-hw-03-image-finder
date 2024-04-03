import errorImage from '../error.jpg';
import { ErrorStyled } from './ImageGaleryErrorView.styled';
import PropTypes from 'prop-types';

export default function ImageGaleryErrorView({ message }) {
  return (
    <ErrorStyled role="alert">
      <img src={errorImage} width="300" alt="button oops" />
      <p>{message}</p>
    </ErrorStyled>
  );
}

ImageGaleryErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
