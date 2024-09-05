import React from 'react';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from '../../ExperienceSection/WorkExperience/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../redux/workExperience/workExperienceApiSlice';
import PropTypes from 'prop-types';

const WorkExperience = ({id}) => {


  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  return (
    <Box sx={styles.container}>
      <Box>
        {workExperiencesData &&
          workExperiencesData.map(
            ({ id, startDate, endDate, position, companyName, description, responsibilities }) => {
              return (
                <WorkExperienceItem
                  key={id}
                  id={id}
                  startDate={startDate}
                  endDate={endDate}
                  position={position}
                  companyName={companyName}
                  description={description}
                  responsibilities={responsibilities}
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
};

export default WorkExperience;
