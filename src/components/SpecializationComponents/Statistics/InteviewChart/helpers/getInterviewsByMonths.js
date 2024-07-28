export const getInterviewsByMonths = ({ data, userId, t }) => {
  const result = [];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setMonth(today.getMonth() - i);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    const conducted = data?.filter(
      (interview) => interview.date.startsWith(`${year}-${month}`) && interview.candidateId === userId
    ).length;

    const passed = data?.filter(
      (interview) => interview.date.startsWith(`${year}-${month}`) && interview.interviewerId === userId
    ).length;

    const monthName = t(`specialization.interviewChartMonths.${month}`);

    result.unshift({ name: monthName, conducted, passed });
  }

  return result;
};

export default getInterviewsByMonths;
