import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg'
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice'
import { ModalSearch } from '../ModalSearch'
import { styles } from './InputSearch.styles'

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch] = useLazyGetSearchQuery();
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query) {
        getSearch(query).then((res) => {
          setUsers(res.data || []);
        });
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleBlur = () => {
    setQuery('');
    setUsers([]);
  }

  return (
    <Box>
      <OutlinedInput
        autoComplete='off'
        name='query'
        placeholder={t('header.search')}
        type='text'
        value={query}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setQuery('')}
        sx={styles.input}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end'>
              <Loupe />
            </IconButton>
          </InputAdornment>
        }
      />
      {!!users.length && <ModalSearch users={users} />}
    </Box>
  );
};

export default InputSearch;
