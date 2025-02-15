import { useEffect, useRef, useState } from 'react';

const useResizeTextarea = (chatWrapperRef) => {
  const textFieldRef = useRef(null);
  const [message, setMessage] = useState('');
  const [textFieldHeight, setTextFieldHeight] = useState(23);

  const handleTextFieldChange = (e) => {
    const height = e.target.scrollHeight;
    const maxHeight = 115;
    setMessage(e.target.value);
    if (height < maxHeight) {
      setTextFieldHeight(height);
    } else {
      setTextFieldHeight(maxHeight);
    }
  };

  useEffect(() => {
    if (textFieldRef.current && chatWrapperRef.current) {
      const textFieldExtraHeight = textFieldHeight - 23;
      const newHeight = 532 - textFieldExtraHeight;
      chatWrapperRef.current.style.maxHeight = `${newHeight}px`;
    }
  }, [textFieldHeight]);

  return { message, setMessage, textFieldRef, handleTextFieldChange };
};

export default useResizeTextarea;
