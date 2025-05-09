import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const SettingsTitle = ({ title }) => {
  const { t } = useTranslation();

  return (
    <Typography component='h4' variant='h4'>
      {t(title)}
    </Typography>
  );
};

SettingsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SettingsTitle;
