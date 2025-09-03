import InterviewHardSkills from '@components/PageComponents/InterviewsComponents/InterviewHardSkills/index.js';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers/index.js';
import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import EmptySkills from '@components/UI/Specialization/EmptySkills/index.js';
import { SkillsSkeleton } from '@components/UI/Skeleton/index.js';
import { ErrorComponent } from '@components/UI/Exceptions/index.js';

const InterviewHardSkillsSinglePassedInterview = () => {
  const { interviewId } = useParams();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });

  if (isFetchingPassedInterview) {
    return <SkillsSkeleton />;
  }

  if (isErrorPassedInterview) {
    return <ErrorComponent />;
  }

  const { hardSkills } = interviewData;

  const hardSkillsArray = getSkillsArray(hardSkills);

  if (!hardSkillsArray.length) {
    return <EmptySkills title='Hard skills' />;
  }

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);

  return <InterviewHardSkills averageHardSkillsMark={averageHardSkillsMark} hardSkills={hardSkillsArray} />;
};

export default InterviewHardSkillsSinglePassedInterview;
