import React from 'react';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../redux/workExperience/workExperienceApiSlice';
import { useSelector } from 'react-redux';

const WorkExperience = () => {
  const { id } = useSelector((state) => state.auth.user.data);

  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  console.log(workExperiencesData);

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

export default WorkExperience;
