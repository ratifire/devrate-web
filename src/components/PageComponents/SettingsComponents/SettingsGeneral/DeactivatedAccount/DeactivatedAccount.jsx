import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { styles } from './DeactivatedAccount.styles';

const DeactivatedAccount = () => {
  const { t } = useTranslation();

  return (
    <>
      <Accordion sx={styles.accordion}>
        <AccordionSummary
          aria-controls='panel-all-content'
          expandIcon={<ExpandMoreIcon />}
          id='panel-all-header'
          sx={styles.accordionSummary}
        >
          <Box sx={styles.boxTitle}>
            <Typography component='h5' variant='h5'>
              {t('settings.general.deactivated.title')}
            </Typography>
            <Typography className='subTitle' component='p' sx={styles.subTitle} variant='body'>
              {t('settings.general.deactivated.subTitle')}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <Box>
            <Typography component='h5' variant='h5'>
              {t('settings.general.deactivated.list.title')}
            </Typography>
            <Typography component='p' variant='body'>
              {t('settings.general.deactivated.list.description')}
            </Typography>
          </Box>
          <Box>
            <Typography component='h5' variant='h5'>
              {t('settings.general.deactivated.list.subTitle')}
            </Typography>
            <Typography component='p' variant='body'>
              {t('settings.general.deactivated.list.subDescription')}
            </Typography>
          </Box>
          <ButtonDef label={t('settings.general.common.deactivate')} sx={styles.btn} variant='outlined' />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DeactivatedAccount;
