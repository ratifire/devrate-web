const formatSearchQuery = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']/g, '');

  if (!/[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/.test(cleanedStr)) {
    return cleanedStr.slice(0, -1);
  }

  return cleanedStr;
};

export default formatSearchQuery;
