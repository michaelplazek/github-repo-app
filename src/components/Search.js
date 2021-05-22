import React from 'react';
import {Box, TextInput} from "grommet";

const Search = ({ value, onChange, placeholderText }) => (
  <Box background='#333'>
    <TextInput
      placeholder={placeholderText}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </Box>
)

export default Search;
