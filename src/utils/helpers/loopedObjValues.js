export const loopedObjValues = (obj) => {
  if (typeof obj !== 'object' && obj !== null) throw new Error('obj should be an Object');
  let index = 0;

  return () => {
    const items = Object.keys(obj);
    const item = obj[items[index]];
    index += 1;

    if (index === items.length) {
      index = 0;
    }
    return item;
  };
};