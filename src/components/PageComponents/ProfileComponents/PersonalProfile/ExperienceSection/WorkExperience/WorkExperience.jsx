import React from 'react';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../../redux/workExperience/workExperienceApiSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';

const WorkExperience = ({ tab, profileType, imgUrl }) => {
  const { id } = useSelector((state) => state.auth.user.data);
  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  if (!workExperiencesData || workExperiencesData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl} isData={!workExperiencesData} />;
  }

  return (
    <Box sx={styles.container}>
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
    </Box>
  );
};

WorkExperience.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default WorkExperience;
