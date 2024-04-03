import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from './Searchbar.styled';

export const Searchbar = ({ ...otherProps }) => {
  return (
    <Container>
      <SearchForm {...otherProps} />
    </Container>
  );
};
