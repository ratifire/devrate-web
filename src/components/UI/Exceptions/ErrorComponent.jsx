import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './Exceptions.styles';

const ErrorComponent = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.box}>
      <Typography variant='h6'>{t('specialization.error')}</Typography>
    </Box>
  );
};

export default ErrorComponent;
