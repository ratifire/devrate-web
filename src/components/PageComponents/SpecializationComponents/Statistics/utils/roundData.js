const roundData = (data) => {
  return data.map((value) => ({
    ...value,
    averageMark: Math.round(value.averageMark),
  }));
};

export default roundData;
