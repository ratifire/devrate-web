/* eslint-disable */
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { useGetSearchQuery } from '../../../../redux/search/searchApiSlice';
import useDebounce from '../../../../utils/hooks/useDebounce';
import { styles } from './InputSearch.styles';
import { ModalSearch } from './ModalSearch';
import { formatSearchQuery } from './helpers';

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
  const { data, isError, isFetching, originalArgs } = useGetSearchQuery(debouncedValue, { skip: !debouncedValue });

  useEffect(() => {
    updateState({
      users: data || [],
      isChange: false,
    });
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    const formatValue = formatSearchQuery(value);

    if (formatValue === query) return;

    if (formatValue.trim() === originalArgs) {
      return updateState({
        isChange: false,
        query: formatValue,
        users: data,
      });
    }

    updateState({
      query: formatValue,
      isChange: true,
      users: [],
    });
  };

  const handleClose = () => {
    updateState({ query: '' });
  };

  const handleBlur = (e) => {
    const relatedTarget = e.relatedTarget;

    if (boxRef.current && boxRef.current.contains(relatedTarget)) {
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
