import React from 'react';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from '../../ExperienceSection/WorkExperience/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../../redux/workExperience/workExperienceApiSlice';
import PropTypes from 'prop-types';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';

const WorkExperience = ({id, tab, profileType, imgUrl}) => {


  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  console.log(workExperiencesData, 'workExperiencesData');
  console.log(tab, '@tab');
  console.log(profileType, '@profileType');

  if (!workExperiencesData || workExperiencesData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
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
                  startYear={startYear}
                  endYear={endYear}
                  position={position}
                  companyName={companyName}
                  description={description}
                  responsibilities={responsibilities}
                />
              );
            }
          )
        }
      </Box>
    </Box>
  );
};

WorkExperience.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default WorkExperience;
