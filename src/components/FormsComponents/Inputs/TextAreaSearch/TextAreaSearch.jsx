import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { styles } from './TextAreaSearch.styles';

const TextAreaSearch = ({ value, handleChange }) => {
  const id = uuid();

  return (
    <>
      <FormControl sx={styles.textareaBox} variant='outlined'>
        <InputLabel htmlFor={id} sx={styles.label} />
        <OutlinedInput
          fullWidth
          multiline
          id={id}
          name='search'
          sx={styles.input}
          type='text'
          value={value}
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
