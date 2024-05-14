import React from 'react';
import { Box, TextField } from '@mui/material';
import { styles } from './TextAreaInput.styles';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const TextAreaInput = ({ label = "About me" }) => {
  const { t } = useTranslation();

  return (
    //TODO create storybook for this component
    <>
      <Box sx={{width: '684px'}}>
        <TextField
          sx={styles.textareaBox}
          id="outlined-multiline-static"
          // label='About me'
          fullWidth
          multiline
          rows={5}
          label={t(label)}
        />
      </Box>
    </>
  );
};

TextAreaInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default TextAreaInput;