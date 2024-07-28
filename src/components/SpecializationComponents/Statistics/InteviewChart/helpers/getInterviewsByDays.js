const getInterviewsByDays = ({ data, userId }) => {
  const result = [];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const dateString = date.toISOString().split('T')[0];

    const conducted = data?.filter(
      (interview) => interview.date === dateString && interview.candidateId === userId
    ).length;

    const passed = data?.filter(
      (interview) => interview.date === dateString && interview.interviewerId === userId
    ).length;

    result.unshift({ name: date.getDate(), conducted, passed });
  }

  return result;
};

export default getInterviewsByDays;
