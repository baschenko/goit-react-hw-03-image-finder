import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Input, Label } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = {
    imgName: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imgName.trim() === '') {
      toast.warn('Введите имя поиска', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    this.props.onSubmit(this.state.imgName);
  };

  handleNameChange = e => {
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <ImSearch />
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          value={this.state.imgName}
          onChange={this.handleNameChange}
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
