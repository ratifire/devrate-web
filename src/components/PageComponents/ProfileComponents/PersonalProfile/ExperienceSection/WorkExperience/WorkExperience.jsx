import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setButtonState } from '@redux/slices/addButton/addButtonSlice.js';
import { useGetWorkExperienceByUserIdQuery } from '@redux/api/slices/workExperienceApiSlice.js';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';

const WorkExperience = ({ tab }) => {
  const { id } = useSelector((state) => state.auth.user.data);
  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (workExperiencesData && workExperiencesData.length > 0) {
      dispatch(setButtonState({ tab, hasData: true }));
    }
  }, [workExperiencesData, tab, dispatch]);

  if (!workExperiencesData || workExperiencesData.length === 0) {
    return (
      <EmptyExperienceTab
        imgUrl={emptyPersonalTabsPictures.emptyWorkExperiencePic}
        isData={!workExperiencesData}
        profileType='personal'
        tab={tab}
      />
    );
  }

  return (
    <Box>
      {workExperiencesData?.map(({ id, startYear, endYear, position, companyName, description, responsibilities }) => {
        return (
          <WorkExperienceItem
            key={id}
            companyName={companyName}
            description={description}
            endYear={`${endYear}`}
            id={id}
            position={position}
            responsibilities={responsibilities}
            startYear={`${startYear}`}
          />
        );
      })}
    </Box>
  );
};

WorkExperience.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default WorkExperience;
