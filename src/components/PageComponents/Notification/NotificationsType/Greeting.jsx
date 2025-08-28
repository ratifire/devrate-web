import { Box, Typography } from '@mui/material';
import Sms from '@mui/icons-material/SmsOutlined';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../NotificationItem/NotificationItem.styles';

const Greeting = ({ formattedDate }) => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={styles.iconWrapper}>
        <Sms />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>{t('notifications.greeting')}</Typography>
        <Typography sx={styles.date} variant='body2'>
          {formattedDate}
        </Typography>
      </Box>
    </>
  );
};

Greeting.propTypes = {
  formattedDate: PropTypes.string.isRequired,
};
export default Greeting;
