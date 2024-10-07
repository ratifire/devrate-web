import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg'
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice'
import { ModalSearch } from '../ModalSearch'
import { styles } from './InputSearch.styles'

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch, { data: users }] = useLazyGetSearchQuery();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      getSearch(query);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(users);
  return (
    <Box>
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
      {!!users?.length && <ModalSearch users={users} />}
    </Box>
  );
};

export default InputSearch;
