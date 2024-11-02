export const checkScrollPadding = (element, size) => {
  if ( !element) return;
  
  function checkScroll () {
    if (element.scrollHeight > element.clientHeight) {
      element.style.paddingRight = size;
    } else {
      element.style.paddingRight = '0';
    }
  }
  
  element.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
};