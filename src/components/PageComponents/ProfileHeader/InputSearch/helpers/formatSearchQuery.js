const formatSearchQuery = (str) => {
  return str.replace(/[^a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']/g, '');
};

export default formatSearchQuery;
