import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  Container,
} from './styles';
export default function BaseDropdown({ options, handleOnSelect }) {
  const defaultOption = options[0];
  return (
    <Container>
      <Dropdown options={options} onChange={handleOnSelect} value={defaultOption} placeholder="Select an option" />
    </Container>
  );
}
