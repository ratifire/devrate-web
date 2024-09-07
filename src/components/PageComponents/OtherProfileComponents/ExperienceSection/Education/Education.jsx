import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.style';
import EducationItem from './EducationItem';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';
import PropTypes from 'prop-types';

const Education = ({ id }) => {
  const { data: educations } = useGetEducationByUserIdQuery(id);
  const sortedEducations = useMemo(() => {
    if (!educations) return [];
    return [...educations].sort((a, b) => a.startYear - b.startYear);
  }, [educations]);

  return (
    <Box sx={styles.container}>
      <Box>
        {sortedEducations.map(({ id, type, name, description, startYear, endYear }) => (
          <EducationItem
            key={id}
            type={type}
            name={name}
            description={description}
            startYear={startYear}
            endYear={endYear === 9999 ? 'Now' : endYear}
           id={id}/>
        ))}
      </Box>
    </Box>
  );
};

Education.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Education;
