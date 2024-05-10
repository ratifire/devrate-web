const checkContrast = (bgColor) => {
  if (bgColor[0] !== '#') {
    throw new Error('The function accepts color only in hex and without transparency');
  }

  const [r, g, b] = bgColor
    .slice(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 128 ? '#ffffff' : '#1D1D1D';
};
export default checkContrast;
