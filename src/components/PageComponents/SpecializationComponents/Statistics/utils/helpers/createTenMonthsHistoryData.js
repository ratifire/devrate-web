const createTenMonthsHistoryData = ({ t, data, average }) => {
  const date = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const dateFullName = date.toISOString().split('T')[0].slice(0, 7);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const monthName = t(`specialization.interviewChartMonths.${month}`);
    const resultItem = {
      name: monthName,
      value: 0,
      count: 0,
    };

    if (data) {
      data.forEach((v) => {
        const correctDate = v.date.slice(0, 7);
        const { hardSkillMark, softSkillMark } = v;
        if (correctDate === dateFullName) {
          resultItem.value += hardSkillMark + softSkillMark;
          resultItem.count += 2;
        }
      });
    }

    if (resultItem.count > 0) {
      resultItem.value = (resultItem.value / resultItem.count).toFixed(1);
    }

    if (resultItem.value === 0) {
      resultItem.value = average;
    }

    result.push(resultItem);
    date.setMonth(date.getMonth() - 1);
  }

  return result.reverse();
};

export default createTenMonthsHistoryData;
