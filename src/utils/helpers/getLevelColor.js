const getLevelColor = (level) => {
  switch (level) {
    case 'Junior':
      return '#25CBFF';
    case 'Middle':
      return '#16FFB9';
    case 'Senior':
      return '#FF0000'; //TODO adjust before commit per design reply
    default:
      return 'inherit';
  }
};

export default getLevelColor;
