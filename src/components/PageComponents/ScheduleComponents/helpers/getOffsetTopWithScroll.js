const getOffsetTopWithScroll = (element) => {
  let offsetTop = 0;
  let currentElement = element;
  while (currentElement) {
    offsetTop += currentElement.offsetTop;
    if (currentElement.offsetParent && currentElement.offsetParent.scrollTop) {
      offsetTop -= currentElement.offsetParent.scrollTop;
    }
    currentElement = currentElement.offsetParent;
  }
  return offsetTop;
};

export default getOffsetTopWithScroll;
