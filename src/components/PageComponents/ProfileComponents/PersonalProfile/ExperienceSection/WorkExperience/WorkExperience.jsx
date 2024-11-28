import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../../redux/workExperience/workExperienceApiSlice';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';
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
