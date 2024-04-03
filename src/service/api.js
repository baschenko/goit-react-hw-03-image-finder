import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (nextImg, page) => {
  const response = await axios.get(
    `?key=35663749-81f1024cac44a82003cb090b4&q=${nextImg}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response.data;
};

getImages.propTypes = {
  nextImg: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
