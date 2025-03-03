import { useEffect, useState } from 'react';

const useScrollChat = (chatWrapperRef) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  const handleScroll = () => {
    if (chatWrapperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;

      const isAtBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
      setShowScrollButton(!isAtBottom);
      setIsScrolledUp(!isAtBottom);
    }
  };

  const handleScrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
      setIsScrolledUp(false);
    }
  };

  useEffect(() => {
    const chatWrapper = chatWrapperRef.current;

    if (chatWrapper) {
      chatWrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (chatWrapper) {
        chatWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!isScrolledUp && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [isScrolledUp]);

  return { showScrollButton, isScrolledUp, handleScrollToBottom };
};

export default useScrollChat;
