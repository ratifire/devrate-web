import { useRef } from 'react';
import { Box, Fade } from '@mui/material';
import { useSelector } from 'react-redux';
import { useResizeTextarea, useScrollChat, useResizeChat } from '@components/PageComponents/Chat/hooks/index.js';
import ChatHeader from '@components/PageComponents/Chat/ChatForm/ChatHeader/index.js';
import ChatMessagesList from '@components/PageComponents/Chat/ChatForm/ChatMessagesList/index.js';
import { styles } from './ChatForm.styles';
import ChatTextarea from './ChatTextarea';

const chatAppearDelay = 100;

const ChatForm = () => {
  const { chat } = useSelector((state) => state.chat);
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);

  const { textFieldRef, message, setMessage, handleTextFieldChange } = useResizeTextarea(chatWrapperRef);
  const { showScrollButton } = useScrollChat(chatWrapperRef);

  const handleResizeMouseDown = useResizeChat(chatPositionRef);

  return (
    <Fade in={chat} timeout={chatAppearDelay}>
      <Box ref={chatPositionRef} sx={styles.position}>
        <Box sx={styles.container}>
          <ChatHeader chatPositionRef={chatPositionRef} />
          <Box ref={chatWrapperRef} sx={styles.chatWrapper}>
            <ChatMessagesList showScrollButton={showScrollButton} />
          </Box>
          <ChatTextarea
            handleTextFieldChange={handleTextFieldChange}
            message={message}
            setMessage={setMessage}
            textFieldRef={textFieldRef}
          />
          <Box sx={styles.resizeHandle} onMouseDown={handleResizeMouseDown} />
        </Box>
      </Box>
    </Fade>
  );
};

export default ChatForm;
