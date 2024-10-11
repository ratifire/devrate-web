/* eslint-disable */
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { useGetSearchQuery } from '../../../../redux/search/searchApiSlice';
import { ModalSearch } from './ModalSearch';
import { styles } from './InputSearch.styles';
import { formatSearchQuery } from './helpers';
import useDebounce from '../../../../utils/hooks/useDebounce';

const initialState = {
  query: '',
  users: [],
  isChange: false,
};

const InputSearch = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(initialState);
  const { query, users, isChange } = state;
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));
  const boxRef = useRef(null);
  const queryTrim = query.trim();
  const formatQueryTrim = formatSearchQuery(queryTrim);
  const debouncedValue = useDebounce({ value: formatQueryTrim, delay: 1000 });
  const { data, isError, isFetching } = useGetSearchQuery(debouncedValue, { skip: !debouncedValue });

  useEffect(() => {
    updateState({
      users: data || [],
      isChange: false,
    });
  }, [data]);

  const handleChange = (e) => {
    updateState({
      query: e.target.value,
      isChange: true,
      users: [],
    });
  };

  const handleClose = () => {
    updateState({ query: '' });
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
