import { useRef } from 'react';

const useMoveChat = () => {
  const chatPositionRef = useRef(null);
  const chatStartPos = useRef({ top: 0, left: 0 });
  const initialMousePos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    const { top, left } = chatPositionRef.current.getBoundingClientRect();
    chatStartPos.current = { top, left };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - initialMousePos.current.x;
    const dy = e.clientY - initialMousePos.current.y;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const chatRect = chatPositionRef.current.getBoundingClientRect();

    let newLeft = chatStartPos.current.left + dx;
    let newTop = chatStartPos.current.top + dy;

    newLeft = Math.max(0, Math.min(newLeft, viewportWidth - chatRect.width));
    newTop = Math.max(0, Math.min(newTop, viewportHeight - chatRect.height));

    chatPositionRef.current.style.left = `${newLeft}px`;
    chatPositionRef.current.style.top = `${newTop}px`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return {
    chatPositionRef,
    handleMouseDown,
  };
};

export default useMoveChat;
