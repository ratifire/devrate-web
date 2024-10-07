import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { styles } from './InputSearch.styles';
import { useTranslation } from 'react-i18next';
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice';

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch] = useLazyGetSearchQuery();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      getSearch(query);
    }, 1000)

    return () => clearTimeout(timerId);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form>
      <OutlinedInput
        autoComplete='off'
        name='query'
        placeholder={t('header.search')}
        type='text'
        value={query}
        onChange={handleChange}
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