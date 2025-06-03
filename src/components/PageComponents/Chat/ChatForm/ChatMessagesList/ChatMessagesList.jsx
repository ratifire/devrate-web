import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetChatHistoryQuery } from '@redux/api/slices/chatApiSlice.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { messagesList } from '@redux/slices/chat/chatSlice.js';
import ChatMessage from './ChatMessage';
import { styles } from './ChatMessagesList.styles.js';

const pageSize = 20;

const ChatMessagesList = ({ showScrollButton }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const { messages, opponentUserInfo } = useSelector((state) => state.chat);
  const { id } = opponentUserInfo;
  const { data: dataChat, isLoading: isChatHistoryLoading } = useGetChatHistoryQuery(
    { opponentUserId: id, page: currentPage, size: pageSize },
    { skip: !id }
  );

  const loadMoreRef = useRef(null);
  const chatWrapperRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    if (!dataChat?.content) return;

    const normalizedMessages = [...dataChat.content].reverse();
    dispatch(
      messagesList({
        newMessages:
          currentPage === 0
            ? normalizedMessages
            : [...normalizedMessages, ...(Array.isArray(messages) ? messages : [])],
      })
    );

    setTotalPages(dataChat.last ? currentPage : dataChat.totalPages);
    setIsLoadingMore(false);

    // Scroll to bottom on initial load
    if (initialLoad) {
      scrollTimeoutRef.current = setTimeout(() => {
        scrollToBottom();
        setInitialLoad(false);
        console.log('scrollToBottom');
      }, 1000);
    }
  }, [dataChat]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (
          entry.isIntersecting &&
          currentPage < totalPages &&
          totalPages > 1 &&
          !isLoadingMore &&
          !isChatHistoryLoading &&
          !initialLoad &&
          isScrolledUp
        ) {
          setIsLoadingMore(true);
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: chatWrapperRef.current,
        rootMargin: '0px',
        threshold: 0.01,
      }
    );

    const timer = setTimeout(() => {
      if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [currentPage, totalPages, isLoadingMore, isChatHistoryLoading, initialLoad, isScrolledUp]);

  const handleScroll = () => {
    if (chatWrapperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;
      const isNearTop = scrollTop < 100;
      setIsScrolledUp(isNearTop);
    }
  };

  useEffect(() => {
    const chatWrapper = chatWrapperRef.current;
    if (chatWrapper) {
      chatWrapper.addEventListener('scroll', handleScroll);
      return () => chatWrapper.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Generate unique keys for messages by combining dateTime and a unique identifier
  const renderedMessages = useMemo(
    () =>
      messages?.map((item, index) => {
        // Create a more unique key by combining dateTime and index
        // If messages have unique IDs, use that instead
        const uniqueKey = item.id ? `${item.id}` : `${item.dateTime}_${index}`;
        return (
          <Box key={uniqueKey}>
            <ChatMessage data={item} />
          </Box>
        );
      }),
    [messages]
  );

  return (
    <>
      <Box ref={chatWrapperRef} sx={{ overflowY: 'auto', height: '100%', position: 'relative' }}>
        <Box ref={loadMoreRef} sx={{ height: '1px', width: '100%' }} />
        {renderedMessages}
      </Box>
      {showScrollButton && !isScrolledUp && (
        <IconButton aria-label='Scroll to bottom' sx={styles.btnIconScroll} onClick={scrollToBottom}>
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
