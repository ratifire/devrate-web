const getSpecLevel = (level) => {
  switch (level) {
    case 0:
      return 'Junior';
    case 1:
      return 'Middle';
    case 2:
      return 'Senior';
    default:
      return 'Incorrect value passed to level';
  }
};

export default getSpecLevel;
