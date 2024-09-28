import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.styles.js';
import EducationItem from './EducationItem';
import { useDispatch, useSelector } from 'react-redux';
import { useGetEducationByUserIdQuery } from '../../../../../../redux/services/educationApiSlice';
import { loadIconsFromLocalStorage } from '../../../../../../utils/helpers';
import { mapDataWithIcons } from '../../../../../../utils/helpers/mapDataWithIcons';
import { iconsEducation } from '../../../../../../utils/constants/Experience/iconsExperience';
import { iconValuesEducation } from '../../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../../utils/helpers/updateIconsInLocalStorage';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';

const Education = ({ tab, profileType, imgUrl }) => {
  const iconsMap = loadIconsFromLocalStorage('education');
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: educationsData, isLoading } = useGetEducationByUserIdQuery(userId, { skip: !userId });
  const educationsNewData = mapDataWithIcons(educationsData, iconsMap, iconsEducation);
  const iconValues = useMemo(() => iconValuesEducation, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButtonState({tab, hasData: !educationsData}));
  }, []);

  useEffect(() => {
    if (educationsNewData && educationsNewData.length > 0) {
      updateIconsInLocalStorage(educationsNewData, iconsMap, iconValues, 'education');
    }

  }, [educationsNewData, iconsMap, iconValues]);


  const sortedEducations = useMemo(() => {
    if (!educationsNewData) return [];
    return [...educationsNewData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsNewData]);

  if (isLoading || !educationsData || educationsData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl} isData={!educationsData}/>;
  }

  return (
    <Box sx={styles.container}>
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
    </Box>
  );
};

Education.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default Education;
