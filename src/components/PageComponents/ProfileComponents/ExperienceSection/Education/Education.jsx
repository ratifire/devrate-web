import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.styles.js';
import EducationItem from './EducationItem/EducationItem';
import { useSelector } from 'react-redux';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';

const Education = () => {
    const { id: userId } = useSelector((state) => state.auth.user.data);
    const { data: educations } = useGetEducationByUserIdQuery(userId);
    
     const sortedEducations = useMemo(() => {
        if (!educations) return [];
        return [...educations].sort((a, b) => a.startYear - b.startYear);
    }, [educations]);
    
    console.log("sortedEducations", sortedEducations);
    
    return (
        <Box sx={styles.container}>
            <Box>
                {sortedEducations.map(({ id, type, name, description, startYear, endYear }) => (
                    <EducationItem
                        key={id}
                        id={id}
                        type={type}
                        name={name}
                        description={description}
                        startYear={startYear}
                        endYear={endYear === 9999 ? 'Now' : endYear}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Education;
