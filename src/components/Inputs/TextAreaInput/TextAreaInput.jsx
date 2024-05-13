import React from 'react';
import { Box, TextField } from '@mui/material';
import { styles } from './TextAreaInput.styles';

const TextAreaInput = () => {
  return (
    //TODO create storybook for this component
    <>
      <Box sx={{width: '684px'}}>
        <TextField
          sx={styles.textareaBox}
          id="outlined-multiline-static"
          label="Multiline"
          fullWidth
          multiline
          rows={5}
        />
      </Box>
    </>
  );
};

export default TextAreaInput;