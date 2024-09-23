import React from 'react';
import { Box } from '@mui/material';
// import { styles } from './WorkExperience.styles';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../redux/workExperience/workExperienceApiSlice';
import { useSelector } from 'react-redux';

const WorkExperience = () => {
  const { id } = useSelector((state) => state.auth.user.data);

  const { data: workExperiencesData } = useGetWorkExperienceByUserIdQuery(id);

  console.log(workExperiencesData);

  return (
      <Box>
        {workExperiencesData &&
          workExperiencesData.map(
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
            }
          )}
      </Box>
  );
};

export default WorkExperience;
