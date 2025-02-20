import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useGetWorkExperienceByUserIdQuery } from '@redux/api/slices/workExperienceApiSlice.js';
import { emptyUserTabsPictures } from '@utils/constants/emptyTabsPictures';
import WorkExperienceItem from '../../ExperienceSection/WorkExperience/WorkExperienceItem';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';

const WorkExperience = ({ id, tab }) => {
  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  if (!workExperiencesData || workExperiencesData.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyUserTabsPictures.emptyWorkExperiencePic} profileType='user' tab={tab} />;
  }

  return (
    <Box>
      <Box>
        {workExperiencesData?.map(
          ({ id, startYear, endYear, position, companyName, description, responsibilities }) => {
            return (
              <WorkExperienceItem
                key={id}
                companyName={companyName}
                description={description}
                endYear={endYear}
                id={id}
                position={position}
                responsibilities={responsibilities}
                startYear={startYear}
              />
            );
          }
        )}
      </Box>
    </Box>
  );
};

WorkExperience.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
};

export default WorkExperience;
