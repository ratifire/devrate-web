import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetChatHistoryQuery } from '@redux/api/slices/chatApiSlice.js';
import { useEffect, useMemo, useState } from 'react';
import { messagesList } from '@redux/slices/chat/chatSlice.js';
import ChatMessage from './ChatMessage';
import { styles } from './ChatMessagesList.styles.js';

const pageSize = 20;

const ChatMessagesList = ({ showScrollButton }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const { messages, opponentUserInfo } = useSelector((state) => state.chat);
  const { id } = opponentUserInfo;
  const { data: dataChat } = useGetChatHistoryQuery(
    { opponentUserId: id, page: currentPage, size: pageSize },
    { skip: !id }
  );

  useEffect(() => {
    if (!dataChat?.content) return;
    setCurrentPage(totalPages); // delete
    const normalizedMessages = [...dataChat.content].reverse();
    dispatch(
      messagesList({
        newMessages: currentPage === 0 ? normalizedMessages : [...normalizedMessages, ...messages],
      })
    );

    setTotalPages(dataChat.last ? currentPage : dataChat.totalPages);
  }, [dataChat]);

  const renderedMessages = useMemo(
    () =>
      messages?.map((item) => (
        <Box key={`${item.dateTime}`}>
          <ChatMessage data={item} />
        </Box>
      )),
    [messages]
  );

  return (
    <>
      <Box />
      {renderedMessages}
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
