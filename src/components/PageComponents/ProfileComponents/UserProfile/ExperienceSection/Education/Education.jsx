import { useMemo } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useGetEducationByUserIdQuery } from '@redux/api/slices/educationApiSlice.js';
import { loopedObjValues } from '@utils/helpers/loopedObjValues';
import { iconsEducation } from '@utils/constants/Experience/iconsExperience';
import { emptyUserTabsPictures } from '@utils/constants/emptyTabsPictures';
import EmptyExperienceTab from '@components/PageComponents/ProfileComponents/sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import EducationItem from './EducationItem';

const Education = ({ id, tab }) => {
  const { data: educationsData, isLoading } = useGetEducationByUserIdQuery(id, { skip: !id });
  const getIcon = loopedObjValues(iconsEducation);

  const sortedEducations = useMemo(() => {
    if (!educationsData) return [];
    return [...educationsData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsData]);

  if (isLoading || !educationsData || educationsData.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyUserTabsPictures.emptyEducationPic} profileType='user' tab={tab} />;
  }

  return (
    <Box>
      <Box>
        {sortedEducations.map(({ id, type, name, description, startYear, endYear }) => (
          <EducationItem
            key={id}
            description={description}
            endYear={endYear === 9999 ? 'Now' : endYear}
            icon={getIcon()}
            id={id}
            name={name}
            startYear={startYear}
            type={type}
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
