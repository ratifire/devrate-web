import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.styles.js';
import EducationItem from './EducationItem';
import { useDispatch, useSelector } from 'react-redux';
import { useGetEducationByUserIdQuery } from '../../../../../../redux/services/educationApiSlice';
import { iconsEducation } from '../../../../../../utils/constants/Experience/iconsExperience';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';
import { loopedObjValues } from '../../../../../../utils/helpers/loopedObjValues';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';


const Education = ({ tab }) => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: educationsData, isLoading } = useGetEducationByUserIdQuery(userId, { skip: !userId });
  const dispatch = useDispatch();
  const getIcon = loopedObjValues(iconsEducation);


  useEffect(() => {
    if (educationsData && educationsData.length > 0) {
      dispatch(setButtonState({ tab, hasData: true }));
    }

  }, [educationsData, tab]);


  const sortedEducations = useMemo(() => {
    if (!educationsData) return [];
    return [...educationsData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsData]);

  if (isLoading || !educationsData || educationsData.length === 0) {
    return <EmptyExperienceTab
      tab={tab}
      profileType="personal"
      imgUrl={emptyPersonalTabsPictures.emptyEducationPic}
      isData={!educationsData} />;
  }

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
            icon={getIcon()}
          />
        ))}
      </Box>
    </Box>
  );
};

Education.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default Education;
