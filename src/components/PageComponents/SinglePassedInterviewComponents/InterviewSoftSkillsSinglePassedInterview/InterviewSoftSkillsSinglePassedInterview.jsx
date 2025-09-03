import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import InterviewSoftSkills from '@components/PageComponents/InterviewsComponents/InterviewSoftSkills';
import { SkillsSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import EmptySkills from '@components/UI/Specialization/EmptySkills';

const InterviewSoftSkillsSinglePassedInterview = () => {
  const { interviewId } = useParams();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });

  if (isErrorPassedInterview) {
    return <ErrorComponent />;
  }

  if (isFetchingPassedInterview) {
    return <SkillsSkeleton />;
  }

  const { softSkills } = interviewData;

  const softSkillsArray = getSkillsArray(softSkills);

  if (!softSkillsArray.length) {
    return <EmptySkills title='Soft skills' />;
  }

  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  return <InterviewSoftSkills averageSoftSkillsMark={averageSoftSkillsMark} softSkills={softSkillsArray} />;
};

export default InterviewSoftSkillsSinglePassedInterview;
