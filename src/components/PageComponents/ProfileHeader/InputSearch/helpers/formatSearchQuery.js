const formatSearchQuery = (str) => {
  return str.replace(/[^\p{L}\s\-'’]+/gu, '');
};

export default formatSearchQuery;
