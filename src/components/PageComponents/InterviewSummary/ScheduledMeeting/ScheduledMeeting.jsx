import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import zoom from '../../../../assets/icons/InterviewPageIcons/zoom.png';
import UserAvatar from '../../../UI/UserAvatar/index.js';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import { styles } from './ScheduledMeeting.styles';

const ScheduledMeeting = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          {t('interviewsSummary.scheduledMeeting.title')}
        </Typography>
        <Typography component='p' sx={styles['upcoming']} variant='subtitle2'>
          UPCOMING
        </Typography>
      </Box>
      <Box sx={styles.boxDataTime}>
        <Typography component='p' variant='subtitle3'>
          26/02/2025 (UTC+01:00)
        </Typography>
        <Typography component='h4' variant='h4'>
          15:30 / 16:30
        </Typography>
      </Box>
      <Box sx={styles.boxInfo}>
        <Box sx={styles.boxImg}>
          <UserAvatar radius='circle' size='xs' userFirstName='Олена' userLastName='Король' userName='Олена' />
          <UserAvatar
            correctStyle={styles.activeImg}
            radius='circle'
            size='xs'
            userFirstName='Дарина'
            userLastName='Бондаренко'
            userName='Дарина'
          />
        </Box>
        <Typography component='p' sx={styles.boxInfoText} variant='subtitle2'>
          {t('interviewsSummary.scheduledMeeting.participants')}:
          <Typography component='span' variant='body'>
            Олена Король; Дарина Бондаренко
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.boxParameters}>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('interviewsSummary.scheduledMeeting.language')}
          </Typography>
          <Typography component='p' variant='body'>
            Англійська
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('interviewsSummary.scheduledMeeting.duration')}
          </Typography>
          <Typography component='p' variant='body'>
            60 хв.
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('interviewsSummary.scheduledMeeting.platform')}
          </Typography>
          <Typography component='p' sx={styles.platformIcon} variant='body'>
            <Box component='img' src={zoom} sx={styles.icon} /> Zoom
          </Typography>
        </Box>
      </Box>
      <Typography component='p' variant='body2'>
        <Trans
          components={{
            a: <Link component={RouterLink} sx={styles.link} to='/' />,
          }}
          i18nKey='interviewsSummary.scheduledMeeting.link'
        />
      </Typography>
      <Box sx={styles.boxBtn}>
        <ButtonDef label={t('interviewsSummary.scheduledMeeting.canceledMeeting')} sx={styles.btn} variant='outlined' />
        <ButtonDef label={t('interviewsSummary.scheduledMeeting.joinMeeting')} sx={styles.btn} variant='contained' />
      </Box>
    </Box>
  );
};

export default ScheduledMeeting;
