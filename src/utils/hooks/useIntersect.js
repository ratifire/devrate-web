import { useEffect, useRef, useState } from 'react';

const useIntersect = ({ rootMargin, root = null, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), { root, rootMargin, threshold });
    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [rootMargin, root, node, threshold]);

  return [setNode, entry];
};

export default useIntersect;
