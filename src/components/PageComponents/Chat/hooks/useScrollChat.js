import { useEffect, useState } from 'react';

const useScrollChat = (chatWrapperRef) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);

  // Функція для обробки скролу
  const handleScroll = () => {
    if (chatWrapperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;

      // Визначаємо, чи користувач знаходиться біля нижньої частини чату
      const isAtBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
      setShowScrollButton(!isAtBottom);
      setIsUserAtBottom(isAtBottom);
    }
  };

  // Функція для прокрутки до низу
  const handleScrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
      setIsUserAtBottom(true);
    }
  };

  // Автоматична прокрутка до низу при монтуванні
  useEffect(() => {
    if (chatWrapperRef.current) {
      handleScrollToBottom();
    }
  }, []); // Пустий масив залежностей, щоб викликати лише при монтуванні

  // Автоматична прокрутка до низу, якщо користувач знаходиться біля нижньої частини
  useEffect(() => {
    if (isUserAtBottom && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [isUserAtBottom]);

  return { showScrollButton, handleScroll, handleScrollToBottom };
};

export default useScrollChat;
