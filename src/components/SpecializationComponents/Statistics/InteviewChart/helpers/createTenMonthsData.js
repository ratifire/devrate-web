const createTenMonthsData = ({ t, data }) => {
  const date = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const dateFullName = date.toISOString().split('T')[0].slice(0, 7);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const monthName = t(`specialization.interviewChartMonths.${month}`);
    const resultItem = {
      name: monthName,
      conducted: 0,
      passed: 0,
    };

    if (data) {
      data.forEach((v) => {
        const correctDate = v.date.slice(0, 7);

        if (correctDate === dateFullName) {
          resultItem.conducted += v.conducted;
          resultItem.passed += v.passed;
        }
      });
    }

    result.push(resultItem);
    date.setMonth(date.getMonth() - 1);
  }

  return result.reverse();
};

export default createTenMonthsData;
