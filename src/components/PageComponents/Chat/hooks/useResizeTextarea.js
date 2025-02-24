import { useEffect, useRef, useState } from 'react';

const minHeight = 23;
const maxHeight = 115;

const useResizeTextarea = (chatWrapperRef) => {
  const textFieldRef = useRef(null);
  const [message, setMessage] = useState('');
  const [textFieldHeight, setTextFieldHeight] = useState(minHeight);

  const textFieldExtraHeight = textFieldHeight - minHeight;
  const newHeight = 532 - textFieldExtraHeight;

  const handleTextFieldChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    if (value.trim() === '') {
      setTextFieldHeight(minHeight);
      return;
    }

    const height = e.target.scrollHeight;

    if (height < maxHeight) {
      setTextFieldHeight(Math.max(height, minHeight));
    } else {
      setTextFieldHeight(maxHeight);
    }
  };

  useEffect(() => {
    if (textFieldRef.current && chatWrapperRef.current) {
      chatWrapperRef.current.style.maxHeight = `${newHeight + minHeight}px`;
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  }, [textFieldHeight]);

  return { message, setMessage, textFieldRef, handleTextFieldChange };
};

export default useResizeTextarea;
