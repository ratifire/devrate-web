import { useEffect } from 'react';
import debounce from 'lodash/debounce';

export const useScrollPadding = (elementRef, size) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const checkScroll = debounce(() => {
      element.style.paddingRight = element.scrollHeight > element.clientHeight ? size : '0';
    }, 100);

    checkScroll();

    element.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      element.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      checkScroll.cancel();
    };
  }, [elementRef, size]);
};
