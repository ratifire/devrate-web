import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { useGetChatHistoryQuery } from '@redux/api/slices/chatApiSlice.js';
// import { useState } from 'react';
import ChatMessage from './ChatMessage';
import { styles } from './ChatMessagesList.styles.js';

// const pageSize = 13;

const ChatMessagesList = ({ showScrollButton }) => {
  // const [currentPage, setCurrentPage] = useState(0);

  const { messages } = useSelector((state) => state.chat);
  // const { id } = opponentUserInfo;
  // const { data, isLoading } = useGetChatHistoryQuery(
  //   { opponentUserId: id, page: currentPage, size: pageSize },
  //   { skip: !id }
  // );

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
