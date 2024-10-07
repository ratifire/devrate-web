/* eslint-disable */
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useRef, useState } from 'react';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { styles } from './InputSearch.styles';
import { useTranslation } from 'react-i18next';
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice';

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch, { data: users }] = useLazyGetSearchQuery();
  const [query, setQuery] = useState('');
  const timeoutId = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      if (value) {
        getSearch(value);
      }
    }, 1000);
  };

  console.log(users);

  return (
    <form>
      <OutlinedInput
        autoComplete='off'
        name='query'
        placeholder={t('header.search')}
        type='text'
        value={query}
        onChange={handleInputChange}
        sx={styles.input}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end'>
              <Loupe />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  )
}

export default InputSearch;