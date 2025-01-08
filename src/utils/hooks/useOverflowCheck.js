import { useState, useEffect, useRef } from 'react';

const useOverflowCheck = (children) => {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const { scrollWidth, clientWidth } = textRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
      if (!textRef.current) {
        setIsOverflowing(true);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children]);

  return { textRef, isOverflowing };
};

export default useOverflowCheck;
