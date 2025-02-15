import { useSelector } from 'react-redux';
import { Box, Fade } from '@mui/material';
import ChatForm from '../ChatForm';

const ChatFormTemplate = () => {
  const { chat, opponentUserInfo } = useSelector((state) => state.chat);
  if (!chat) return null;
  return (
    <Fade in={chat}>
      <Box>
        <ChatForm opponentUserInfo={opponentUserInfo} />
      </Box>
    </Fade>
  );
};

export default ChatFormTemplate;
