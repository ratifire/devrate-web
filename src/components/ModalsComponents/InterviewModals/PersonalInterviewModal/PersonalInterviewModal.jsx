import { Box, Button, TextField, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import useCopyToClipboard from '@utils/hooks/useCopyToClipboard.js';
import { openChat } from '@redux/slices/chat/chatSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalData } from '@redux/slices/modal/modalSlice.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { styles } from './PersonalInterviewModal.styles';

const PersonalInterviewModal = () => {
  const { t } = useTranslation();
  const copyToClipboard = useCopyToClipboard();
  const { meetingUrl, chatData } = useSelector(selectModalData);
  const dispatch = useDispatch();
  const { closeModal } = useModalController();
  const handleCopy = () => {
    copyToClipboard(meetingUrl);
  };

  const handleSendLink = () => {
    closeModal(modalNames.personalInterviewModal);
    dispatch(openChat(chatData));
  };

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.personaInterview.title')}</Typography>
      <Box sx={styles.content}>
        <Typography sx={styles.text} variant='body1'>
          {t('modal.personaInterview.text')}
        </Typography>
        <TextField
          focused
          readOnly
          label={t('modal.personaInterview.label')}
          sx={styles.input}
          value={meetingUrl}
          variant='outlined'
        />
      </Box>
      <Box sx={styles.actions}>
        <Button sx={styles.copyButton} variant='text' onClick={handleCopy}>
          <ContentCopyIcon sx={styles.copyIcon} />
          {t('modal.personaInterview.btnCopy')}
        </Button>
        <Button variant='contained' onClick={handleSendLink}>
          {t('modal.personaInterview.btnSendMessage')}
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInterviewModal;
