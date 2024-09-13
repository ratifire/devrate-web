import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.style';
import EducationItem from './EducationItem';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';
import PropTypes from 'prop-types';
import { iconsLocalStorage, loadIconsFromLocalStorage } from '../../../../../utils/helpers';
import { iconsEducation } from '../../../../../utils/constants/iconsExperience';

const Education = ({ id }) => {
  const iconsMap = loadIconsFromLocalStorage('education');
  const { data: educationsData } = useGetEducationByUserIdQuery(id, { skip: !id });


  const educationsNewData = educationsData?.map((education) => {
    const iconName = iconsMap[education.id];
    const iconComponent = iconsEducation[iconName];
    return {
      ...education,
      iconName,
      iconComponent,
    };
  });

  const iconValues = useMemo(() => Object.keys(iconsEducation), []);

  useEffect(() => {
    if (educationsData) {
      const existingIcons = iconsMap;
      const educationsWithoutIcons = educationsData.filter((education) => {
        return !existingIcons[education.id];
      });

      if (educationsWithoutIcons.length > 0) {
        const shuffledIcons = [...iconValues].sort(() => 0.5 - Math.random());
        const newIcons = {};
        educationsWithoutIcons.forEach((education, index) => {
          newIcons[education.id] = shuffledIcons[index % shuffledIcons.length];
        });
        iconsLocalStorage({ ...existingIcons, ...newIcons }, 'education');
      }
    }
  }, [educationsData, iconValues, iconsMap]);

  const sortedEducations = useMemo(() => {
    if (!educationsNewData) return [];
    return [...educationsNewData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsNewData]);

  return (
    <Box sx={styles.container}>
      <Box>
        {sortedEducations?.map(({ id, type, name, description, startYear, endYear, iconComponent }) => (
          <EducationItem
            key={id}
            type={type}
            name={name}
            description={description}
            startYear={startYear}
            endYear={endYear === 9999 ? 'Now' : endYear}
            icon={iconComponent}
            id={id}
          />
        ))}
      </Box>
    </Box>
  );
};

Education.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Education;
