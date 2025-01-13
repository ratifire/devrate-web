export const generateYearsArray = () => {
  const availableYears = [];
  const currentYear = new Date().getFullYear();
  for (let i = 1950; i <= currentYear; i++) {
    availableYears.push(String(i));
  }
  return availableYears;
};
