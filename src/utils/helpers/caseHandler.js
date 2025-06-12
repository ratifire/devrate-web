export const makeCorrectCountryCase = (usersCountry) => {
  if (usersCountry === 'Ukraine' || usersCountry === 'Poland') {
    return usersCountry.charAt(0).toLowerCase() + usersCountry.slice(1);
  }
  return usersCountry;
};
