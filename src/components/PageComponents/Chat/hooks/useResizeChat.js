import { useEffect, useRef } from 'react';

const useResizeChat = (chatPositionRef) => {
  const isResizing = useRef(false);
  const resizeStartPos = useRef({ width: 0, height: 0 });

  const handleResizeMouseDown = (e) => {
    isResizing.current = true;
    resizeStartPos.current = {
      width: chatPositionRef.current.offsetWidth,
      height: chatPositionRef.current.offsetHeight,
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener('mousemove', handleResizeMouseMove);
    document.addEventListener('mouseup', handleResizeMouseUp);
  };

  const handleResizeMouseMove = (e) => {
    if (!isResizing.current) return;
    const dx = e.clientX - resizeStartPos.current.x;
    const newWidth = Math.min(580, Math.max(380, resizeStartPos.current.width + dx)); // Обмеження ширини
    chatPositionRef.current.style.width = `${newWidth}px`; // Зміна лише ширини
  };

  const handleResizeMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizeMouseMove);
    document.removeEventListener('mouseup', handleResizeMouseUp);
  };

  useEffect(() => {
    if (chatPositionRef.current) {
      chatPositionRef.current.style.width = '480px';
    }
  }, []);

  return handleResizeMouseDown;
};

export default useResizeChat;
