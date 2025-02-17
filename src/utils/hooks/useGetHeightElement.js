import { useEffect, useRef } from 'react';

const useGetHeightElement = (element) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const parentNode = document.querySelector(element);
      if (parentNode) {
        ref.current = parentNode.clientHeight;
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useGetHeightElement;
