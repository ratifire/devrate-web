export const generateYearsArray = () => {
  const availableYears = [];
  for (let i = 1950; i <= `${new Date().getFullYear()}`; i++) {
    availableYears.push(`${i}`);
  }
  return availableYears
}