import { useEffect, useState } from 'react';

const useGetHeightElement = (element) => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const parentNode = document.querySelector(element);
      if (parentNode) {
        setHeight(parentNode.clientHeight);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return height;
};

export default useGetHeightElement;
