const getLevelColor = (level) => {
  switch (level) {
    case 'Junior':
      return '#25CBFF';
    case 'Middle':
      return '#16FFB9';
    case 'Senior':
      return '#DAFE22';
    default:
      return 'inherit';
  }
};

export default getLevelColor;
