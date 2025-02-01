const getLevelColor = (level) => {
  switch (level) {
    case 0:
      return '#25CBFF';
    case 1:
      return '#16FFB9';
    case 2:
      return '#DAFE22';
    default:
      return 'inherit';
  }
};

export default getLevelColor;
