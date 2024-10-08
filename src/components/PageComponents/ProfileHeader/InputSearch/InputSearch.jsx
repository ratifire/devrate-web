import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice';
import { ModalSearch } from '../ModalSearch';
import { styles } from './InputSearch.styles';

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch, { isError, isFetching }] = useLazyGetSearchQuery();
  const [state, setState] = useState({
    query: '',
    users: [],
    isChange: false,
  })
  const { query, users, isChange } = state;
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query) {
        getSearch(query).then((res) => {
          updateState({
            users: res.data || [],
            isChange: false,
          });
        });
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [query]);

  const handleChange = (e) => {
    updateState({
      query: e.target.value,
      isChange: true,
      users: [],
    })
  };

  const handleBlur = () => {
    updateState({
      query: '',
      users: [],
    })
  };

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
        sx={styles.input}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end'>
              <Loupe />
            </IconButton>
          </InputAdornment>
        }
      />
      {query && (
        <ModalSearch
          isError={isError}
          isSpinner={isFetching || isChange}
          users={users}
        />
      )}
    </Box>
  );
};

export default InputSearch;
