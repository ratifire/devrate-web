function useSearchUser(data, searchString) {
  const searchTerms = searchString
    .toLowerCase()
    .split(' ')
    .filter((term) => term.trim() !== ''); // Видаляємо порожні рядки

  if (searchTerms.length === 0) {
    return data.map((user) => ({ ...user, isMatch: false }));
  }

  const filteredData = data.map((user) => {
    const matches = searchTerms.every(
      (term) =>
        user.opponentFirstName.toLowerCase().includes(term) || user.opponentLastName.toLowerCase().includes(term)
    );

    return {
      ...user,
      isMatch: matches,
    };
  });

  return filteredData.sort((a, b) => {
    if (a.isMatch && !b.isMatch) return -1;
    if (!a.isMatch && b.isMatch) return 1;
    return 0;
  });
}

export default useSearchUser;
