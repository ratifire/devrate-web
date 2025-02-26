import { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setButtonState } from '@redux/slices/addButton/addButtonSlice.js';
import { useGetEducationByUserIdQuery } from '@redux/api/slices/educationApiSlice.js';
import { iconsEducation } from '@utils/constants/Experience/iconsExperience';
import { loopedObjValues } from '@utils/helpers/loopedObjValues';
import { emptyPersonalTabsPictures } from '@utils/constants/emptyTabsPictures';
import EmptyExperienceTab from '@components/PageComponents/ProfileComponents/sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import EducationItem from './EducationItem';

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
    return (
      <EmptyExperienceTab
        imgUrl={emptyPersonalTabsPictures.emptyEducationPic}
        isData={!educationsData}
        profileType='personal'
        tab={tab}
      />
    );
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
  tab: PropTypes.string.isRequired,
};

export default Education;
