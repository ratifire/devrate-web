const getLevel = (level) => {
  return {
    JUNIOR: 'Middle',
    MIDDLE: 'Senior',
    SENIOR: 'Guru',
  }[level] ?? 'Junior'
}

export default getLevel