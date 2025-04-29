import { Box, IconButton, TextField } from '@mui/material';
import Send from '@assets/icons/send.svg?react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { sendChatMessage } from '@redux/slices/chat/chatMiddleware.js';
import { useDispatch } from 'react-redux';
import { styles } from './ChatTextarea.styles.js';

const ChatTextarea = ({ textFieldRef, message, setMessage, handleTextFieldChange }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmitMessages = (e) => {
    e.preventDefault();
    dispatch(sendChatMessage(message));
    // setTimeout(handleTextFieldChange, chatAppearDelay + 50);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitMessages(e);
    }
  };
  return (
    <Box sx={styles.chatForm}>
      <TextField
        ref={textFieldRef}
        fullWidth
        multiline
        maxRows={5}
        minRows={1}
        placeholder={t('chat.enterMessages')}
        sx={styles.textArea}
        value={message}
        variant='outlined'
        onChange={handleTextFieldChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton disabled={!message.trim()} sx={styles.btnSend} onClick={handleSubmitMessages}>
        <Send />
      </IconButton>
    </Box>
  );
};

ChatTextarea.propTypes = {
  textFieldRef: PropTypes.any,
  message: PropTypes.string,
  setMessage: PropTypes.any,
  handleTextFieldChange: PropTypes.any,
};

export default ChatTextarea;
