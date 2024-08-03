const createTenDaysData = ({ data }) => {
  const date = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const day = date.getDate();
    const dateFullName = date.toISOString().split('T')[0];

    const resultItem = {
      name: day,
      conducted: 0,
      passed: 0,
    };

    if (data) {
      data.forEach((v) => {
        if (v.date === dateFullName) {
          resultItem.conducted += v.conducted;
          resultItem.passed += v.passed;
        }
      });
    }

    result.push(resultItem);
    date.setDate(date.getDate() - 1);
  }

  return result.reverse();
};

export default createTenDaysData;
