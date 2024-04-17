import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { ReactComponent as EducationalCourses } from '../../../../../assets/icons/educationalCourses.svg';
import styles from './EducationItem.styles.js';

const EducationItem = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const text =
    'Мої навички у програмуванні на PHP, використанні ООП та підходу MVC підтримуються значним досвідом роботи з базами даних, такими як MySQL та PostgreSQL. Я ефективно використовую фреймворк Laravel 5.3 для розробки масштабованих веб-додатків та володію базовими знаннями Symfony 3, зокрема Sonata. ';
  return (
    <Box sx={styles.educationItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.logoTitleContainer}>
          <EducationalCourses />
          <Box sx={{ marginLeft: 11 }}>
            <Typography sx={styles.courseTitle}>PHP course</Typography>
            <Typography sx={styles.schoolTitle}>HILLEL IT SCHOOL</Typography>
          </Box>
        </Box>
        <Box sx={styles.studyDates}>2016-2016</Box>
      </Box>
      {isCollapsed ? (
        <Typography>
          {text.slice(0, 200)}
          <Link
            component='button'
            variant='body2'
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            Читати далі...
          </Link>
        </Typography>
      ) : (
        <Typography>
          {text}
          <Link
            component='button'
            variant='body2'
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            Згорнути
          </Link>
        </Typography>
      )}
    </Box>
  );
};
export default EducationItem;
