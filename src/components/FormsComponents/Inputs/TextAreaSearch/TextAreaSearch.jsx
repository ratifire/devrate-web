import React from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { styles } from './TextAreaSearch.styles';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const TextAreaSearch = ({
                          value,
                          handleChange,
                        }) => {
  const id = uuid();
  
  return (
    <>
      <FormControl variant="outlined" sx={styles.textareaBox}>
        <InputLabel htmlFor={id} sx={styles.label}/>
        <OutlinedInput
          sx={styles.input}
          id={id}
          name='search'
          value={value}
          type='text'
          fullWidth
          multiline
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};

TextAreaSearch.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextAreaSearch;
