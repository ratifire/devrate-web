import { Box, Button, TextField, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useCreatePersonalMeetingUrlMutation } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import useCopyToClipboard from '@utils/hooks/useCopyToClipboard.js';
import { styles } from './PersonalInterviewModal.styles';

const PersonalInterviewModal = () => {
  const [createPersonalMeetingUrl, { data: meetingUrl }] = useCreatePersonalMeetingUrlMutation();
  const enqueueSnackbar = useSnackbar();
  const { t } = useTranslation();
  const copyToClipboard = useCopyToClipboard();
  useEffect(() => {
    const createMeeting = async () => {
      try {
        await createPersonalMeetingUrl().unwrap();
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'error' });
      }
    };
    createMeeting();
  }, []);

  const handleCopy = () => {
    copyToClipboard(meetingUrl);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>Запланувати зустріч</Typography>
      <Box sx={styles.content}>
        <Typography sx={styles.text} variant='body1'>
          Надішліть згенероване посилання іншому користувачу, щоб почати зустріч в будь-який зручний час.
        </Typography>
        <TextField focused readonly label='Посилання' sx={styles.input} value={meetingUrl} variant='outlined' />
      </Box>
      <Box sx={styles.actions}>
        <Button sx={styles.copyButton} variant='text' onClick={handleCopy}>
          <ContentCopyIcon sx={styles.copyIcon} />
          Копіювати посилання
        </Button>
        <Button variant='contained'>Надіслати в чат</Button>
      </Box>
    </Box>
  );
};

export default PersonalInterviewModal;
