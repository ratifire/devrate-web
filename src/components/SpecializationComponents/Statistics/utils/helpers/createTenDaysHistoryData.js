const createTenDaysHistoryData = ({ data }) => {
  const date = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const day = date.getDate();
    const dateFullName = date.toISOString().split('T')[0];

    const resultItem = {
      name: day,
      value: 0,
      count: 0,
    };

    if (data) {
      data.forEach((v) => {
        if (v.date === dateFullName) {
          const { hardSkillMark, softSkillMark } = v;
          resultItem.value += hardSkillMark + softSkillMark;
          resultItem.count += 2;
        }
      });
    }

    if (resultItem.count > 0) {
      resultItem.value = (resultItem.value / resultItem.count).toFixed(1);
    }

    if (resultItem.value === 0) {
      resultItem.value = 5; // костыль!!!!!!!!!!
    }

    result.push(resultItem);
    date.setDate(date.getDate() - 1);
  }

  return result.reverse();
};

export default createTenDaysHistoryData;
