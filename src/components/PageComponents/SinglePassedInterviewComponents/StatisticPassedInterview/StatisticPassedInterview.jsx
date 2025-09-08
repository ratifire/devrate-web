import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole';
import InterviewStatistics from '@components/PageComponents/InterviewsComponents/InterviewStatistics';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { useLocation } from 'react-router';

const StatisticPassedInterview = () => {
  const location = useLocation();

  const interviewData = location.state.event;

  const { softSkills, hardSkills, role } = interviewData;
  const hardSkillsArray = getSkillsArray(hardSkills);
  const softSkillsArray = getSkillsArray(softSkills);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);
  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);

  return (
    <InterviewStatistics
      hardSkillMark={role === feedbackInterviewRole.CANDIDATE ? averageHardSkillsMark : 0}
      role={role}
      softSkillMark={averageSoftSkillsMark}
    />
  );
};

export default StatisticPassedInterview;
