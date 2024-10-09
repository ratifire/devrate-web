import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { useLazyGetSearchQuery } from '../../../../redux/search/searchApiSlice';
import { ModalSearch } from './ModalSearch';
import { styles } from './InputSearch.styles';
import { formatSearchQuery } from './helpers';

const initialState = {
  query: '',
  users: [],
  isChange: false,
};

const InputSearch = () => {
  const { t } = useTranslation();
  const [getSearch, { isError, isFetching }] = useLazyGetSearchQuery();
  const [state, setState] = useState(initialState);
  const { query, users, isChange } = state;
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));
  const boxRef = useRef(null);
  const queryTrim = query.trim();

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (queryTrim) {
        getSearch(formatSearchQuery(queryTrim)).then((res) => {
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
    });
  };

  const handleClose = () => {
    updateState({ query: '', users: [] });
  };

  const handleBlur = (e) => {
    if (boxRef.current && boxRef.current.contains(e.relatedTarget)) {
      return;
    }

    handleClose();
  };

  return (
    <Box ref={boxRef}>
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
      {queryTrim && (
        <ModalSearch isError={isError} isSpinner={isFetching || isChange} users={users} onClose={handleClose} />
      )}
    </Box>
  );
};

export default InputSearch;
