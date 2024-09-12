import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import styles from './Education.style';
import EducationItem from './EducationItem';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';
import PropTypes from 'prop-types';
import { ReactComponent as Book } from '../../../../../assets/icons/EducationPageIcons/book.svg';
import { ReactComponent as Computer } from '../../../../../assets/icons/EducationPageIcons/computer.svg';
import { ReactComponent as Molecule } from '../../../../../assets/icons/EducationPageIcons/molecule.svg';
import { ReactComponent as Cap } from '../../../../../assets/icons/EducationPageIcons/square-academic-cap.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setIcons } from '../../../../../redux/icons/iconsSlice';


const icons = {
  Book: Book,
  Computer: Computer,
  Molecule: Molecule,
  Cap: Cap,
};

const Education = ({ id }) => {
  const dispatch = useDispatch();
  const { data: educationsData } = useGetEducationByUserIdQuery(id, { skip: !id });
  const iconsMap = useSelector((state) => state.icons);
  const iconValues = useMemo(() => Object.keys(icons), []);

  const sortedEducations = useMemo(() => {
    if (!educationsData) return [];
    return [...educationsData].sort((a, b) => a.startYear - b.startYear);
  }, [educationsData]);


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
        dispatch(setIcons({ ...existingIcons, ...newIcons }));
      }
    }
  }, [educationsData, dispatch, iconValues, iconsMap]);

  return (
    <Box sx={styles.container}>
      <Box>
        {sortedEducations?.map(({ id, type, name, description, startYear, endYear }) => {
          const iconName = iconsMap[id];
          console.log(iconsMap[id]);
          const IconComponent = icons[iconName];
          return (
            <EducationItem
              key={id}
              type={type}
              name={name}
              description={description}
              startYear={startYear}
              endYear={endYear === 9999 ? 'Now' : endYear}
              icon={IconComponent}
              id={id}
            />
          );
        })}
      </Box>
    </Box>
)
  ;
};

Education.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Education;
