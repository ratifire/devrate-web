import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Loupe } from '../../../../assets/icons/loupe.svg';
import { useGetSearchQuery } from '../../../../redux/search/searchApiSlice';
import useDebounce from '../../../../utils/hooks/useDebounce';
import useMergeState from '../../../../utils/hooks/useMergeState';
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
  const [state, updateState] = useMergeState(initialState);
  const { query, users, isChange } = state;
  const boxRef = useRef(null);
  const formatQueryTrim = formatSearchQuery(query.trim());
  const debouncedValue = useDebounce({ value: formatQueryTrim });
  const { data, isError, isFetching, originalArgs, startedTimeStamp } = useGetSearchQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  useEffect(() => {
    if (data) {
      updateState({
        users: data || [],
        isChange: false,
      });
    }
  }, [data, startedTimeStamp]);

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
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end'>
              <Loupe />
            </IconButton>
          </InputAdornment>
        }
        name='query'
        placeholder={t('header.search')}
        sx={styles.input}
        type='text'
        value={query}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {formatQueryTrim && (
        <ModalSearch isError={isError} isSpinner={isFetching || isChange} users={users} onClose={handleClose} />
      )}
    </Box>
  );
};

export default InputSearch;
