import { MenuItem } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const OptionsList = ({ data, text }) => {
  const { t } = useTranslation();
  return (
    <>
      {data.map(({ id, country }) => {
        return (
          <MenuItem key={id} value={country}>
            {t(`${text}.${country}`)}
          </MenuItem>
        );
      })}
    </>
  );
};

OptionsList.propTypes = {
  data: PropTypes.array,
  text: PropTypes.string,
};
OptionsList.defaultProps = {
  data: [
    {
      id: '',
      country: '',
    },
  ],
  text: '',
};
export default OptionsList;
