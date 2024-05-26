import React from 'react';
import { Box, Skeleton } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../redux/workExperience/workExperienceApiSlice';

const WorkExperience = () => {
  const id = 8883;
  const { data: workExperiencesData, isLoading } =
    useGetWorkExperienceByUserIdQuery(id);

  if (isLoading) {
    return  <Skeleton animation="wave" height={50} />
  }

    console.log(workExperiencesData);


  return (
    <Box sx={styles.container}>
      <Box>
        {workExperiencesData.map(({id, startDate, endDate, position, companyName, description, responsibilities}) => {
          return (
            <WorkExperienceItem
              key={id}
              startDate={startDate}
              endDate={endDate}
              position={position}
              companyName={companyName}
              description={description}
              responsibilities={responsibilities}
            />
            )
        })}
      </Box>
    </Box>
  );
};


export default WorkExperience;
