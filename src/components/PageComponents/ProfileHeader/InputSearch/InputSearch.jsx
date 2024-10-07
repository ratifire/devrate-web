/* eslint-disable */
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { styles } from './InputSearch.styles';

const initialValues = {
  query: '',
};

const InputSearch = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  async function onSubmit(values, { resetForm }) {
    try {
      resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <OutlinedInput
        autoComplete='off'
        name='query'
        placeholder='Пошук'
        type='text'
        value={formik.values.query}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={styles.input}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton type='submit' onClick={formik.handleSubmit} edge='end'>
              <Loupe />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  )
}

export default InputSearch;