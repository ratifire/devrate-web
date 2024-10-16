import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.styles';
import EducationItem from './EducationItem';
import { useGetEducationByUserIdQuery } from '../../../../../../redux/services/educationApiSlice';
import PropTypes from 'prop-types';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { loopedObjValues } from '../../../../../../utils/helpers/loopedObjValues';
import { iconsEducation } from '../../../../../../utils/constants/Experience/iconsExperience';
import { emptyUserTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';


const Education = ({ id, tab }) => {
  const { data: educationsData, isLoading } = useGetEducationByUserIdQuery(id, { skip: !id });
  const getIcon = loopedObjValues(iconsEducation);


  const sortedEducations = useMemo(() => {
    if (!educationsData) return [];
    return [...educationsData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsData]);

  if (isLoading || !educationsData || educationsData.length === 0) {
    return <EmptyExperienceTab
      tab={tab}
      profileType="user"
      imgUrl={emptyUserTabsPictures.emptyEducationPic} />;
  }

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
            icon={getIcon()}
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
};

export default Education;
