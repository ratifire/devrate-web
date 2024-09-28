import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.style';
import EducationItem from './EducationItem';
import { useGetEducationByUserIdQuery } from '../../../../../../redux/services/educationApiSlice';
import PropTypes from 'prop-types';
import { loadIconsFromLocalStorage } from '../../../../../../utils/helpers';
import { iconsEducation } from '../../../../../../utils/constants/Experience/iconsExperience';
import { mapDataWithIcons } from '../../../../../../utils/helpers/mapDataWithIcons';
import { iconValuesEducation } from '../../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../../utils/helpers/updateIconsInLocalStorage';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';

const Education = ({ id, tab, profileType, imgUrl }) => {
  const iconsMap = loadIconsFromLocalStorage('education');
  const { data: educationsData, isLoading } = useGetEducationByUserIdQuery(id, { skip: !id });
  const educationsNewData = mapDataWithIcons(educationsData, iconsMap, iconsEducation);
  const iconValues = useMemo(() => iconValuesEducation, []);

  useEffect(() => {
    if (educationsNewData && educationsNewData.length > 0) {
      updateIconsInLocalStorage(educationsNewData, iconsMap, iconValues, 'education');
    }
  }, [educationsNewData, iconValues, iconsMap]);

  const sortedEducations = useMemo(() => {
    if (!educationsNewData) return [];
    return [...educationsNewData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsNewData]);

  if (isLoading || !educationsData || educationsData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
  }

  return (
    <Box sx={styles.container}>
      <Box>
        {sortedEducations.map(({ id, type, name, description, startYear, endYear, iconComponent }) => (
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
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Education;
