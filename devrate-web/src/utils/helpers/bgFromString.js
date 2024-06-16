const bgFromString = (string) => {
  if (string.split(' ').length !== 2) {
    throw new Error('Param should contain a 2 words');
  }
  let hash = 0;
  let color = '#';

  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export default bgFromString;
