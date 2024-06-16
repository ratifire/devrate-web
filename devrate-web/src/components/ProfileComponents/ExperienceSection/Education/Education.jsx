import React from 'react';
import { Box, Skeleton } from '@mui/material';
import styles from './Education.styles.js';
import EducationItem from './EducationItem/EducationItem';
import { useSelector } from 'react-redux';
import { useGetEducationByUserIdQuery } from '../../../../redux/services/educationApiSlice';

const Education = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const { data: educations, isLoading } = useGetEducationByUserIdQuery(id);

  if (isLoading) {
    return  <Skeleton animation="wave" height={50} />
  }

  return (
    <Box sx={styles.container}>
      <Box>
        {educations.map(({id, type, name, description, startYear, endYear}) => {
          return (
            <EducationItem
              key={id}
              id={id}
              type={type}
              name={name}
              description={description}
              startYear={startYear}
              endYear={endYear} />
          )
        })}
      </Box>{' '}
    </Box>
  );
};
export default Education;
