export const generateYearsArray = () => {
  const availableYears = [];
  const startedYear = 1950;
  const currentYear = new Date().getFullYear();
  for (let i = startedYear; i <= currentYear; i++) {
    availableYears.push(String(i));
  }
  return availableYears;
};
