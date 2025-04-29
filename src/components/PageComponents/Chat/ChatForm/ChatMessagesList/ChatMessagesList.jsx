import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { styles } from './ChatMessagesList.styles.js';

const ChatMessagesList = ({ showScrollButton }) => {
  const { messages } = useSelector((state) => state.chat);
  return (
    <>
      <Box />
      {messages?.map((item) => (
        <Box key={item.dateTime}>
          <ChatMessage data={item} />
        </Box>
      ))}
      {showScrollButton && (
        <IconButton aria-label='Scroll to bottom' sx={styles.btnIconScroll}>
          <KeyboardArrowDownIcon />
        </IconButton>
      )}
    </>
  );
};

ChatMessagesList.propTypes = {
  showScrollButton: PropTypes.any,
};

export default ChatMessagesList;
