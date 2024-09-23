import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
// import { styles } from './Education.styles.js';
import EducationItem from './EducationItem';
import { useSelector } from 'react-redux';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';
import { loadIconsFromLocalStorage } from '../../../../../utils/helpers';
import {mapDataWithIcons} from '../../../../../utils/helpers/mapDataWithIcons';
import { iconsEducation } from '../../../../../utils/constants/Experience/iconsExperience';
import { iconValuesEducation } from '../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../utils/helpers/updateIconsInLocalStorage';

const Education = () => {
  const iconsMap = loadIconsFromLocalStorage('education');
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: educationsData } = useGetEducationByUserIdQuery(userId, { skip: !userId });
  const educationsNewData = mapDataWithIcons(educationsData, iconsMap, iconsEducation);
  const iconValues = useMemo(() => iconValuesEducation, []);

  useEffect(() => {
    updateIconsInLocalStorage(educationsNewData, iconsMap, iconValues, 'education');
  }, [educationsNewData, iconValues, iconsMap]);

  const sortedEducations = useMemo(() => {
    if (!educationsNewData) return [];
    return [...educationsNewData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsNewData]);

  return (
    
      <Box>
        {sortedEducations.map(({ id, type, name, description, startYear, endYear, iconComponent }) => (
          <EducationItem
            key={id}
            id={id}
            type={type}
            name={name}
            description={description}
            startYear={startYear}
            endYear={endYear === 9999 ? 'Now' : endYear}
            icon={iconComponent}
          />
        ))}
      </Box>
  );
};

export default Education;
