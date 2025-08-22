import { Box, Button, TextField, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styles } from './PersonalInterviewModal.styles';

const PersonalInterviewModal = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>Запланувати зустріч</Typography>
      <Box sx={styles.content}>
        <Typography sx={styles.text} variant='body1'>
          Надішліть згенероване посилання іншому користувачу, щоб почати зустріч в будь-який зручний час.
        </Typography>
        <TextField disabled label='Посилання' value={'https://link.link-03920_link'} variant='outlined' />
      </Box>
      <Box sx={styles.actions}>
        <Button disableRipple sx={styles.copyButton} variant='text'>
          <ContentCopyIcon sx={styles.copyIcon} />
          Копіювати посилання
        </Button>
        <Button variant='contained'>Надіслати в чат</Button>
      </Box>
    </Box>
  );
};

export default PersonalInterviewModal;
