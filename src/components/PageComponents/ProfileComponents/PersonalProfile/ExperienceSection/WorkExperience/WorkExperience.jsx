import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../../redux/workExperience/workExperienceApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';

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
    return <EmptyExperienceTab
      tab={tab}
      profileType='personal'
      imgUrl={emptyPersonalTabsPictures.emptyWorkExperiencePic}
      isData={!workExperiencesData} />;
  }



  return (
      <Box>
        {workExperiencesData?.map(
            ({ id, startYear, endYear, position, companyName, description, responsibilities }) => {
              return (
                <WorkExperienceItem
                  key={id}
                  id={id}
                  startYear={`${startYear}`}
                  endYear={`${endYear}`}
                  position={position}
                  companyName={companyName}
                  description={description}
                  responsibilities={responsibilities}
                />
              );
            },
          )
        }
      </Box>
  );
};

WorkExperience.propTypes = {
  tab: PropTypes.string.isRequired,
}

export default WorkExperience;
