import React from 'react';
import { Box, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './WorkExperienceItem.styles.js';

const WorkExperienceItem = () => {
  const text =
    'Prosper є лідером у сфері фінтеху, пропонуючи платформу пірингового кредитування, яка поєднує передові технології з фінансовими послугами. Вони використовують алгоритми на основі даних для ефективної та справедливої обробки кредитів, що робить їх актуальними для розробників програмного забезпечення, зацікавлених у перетині технологій та фінансів.';
  return (
    <Box sx={styles.workExpeirenceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.workTitleContainer}>
          <Typography sx={styles.workPosition}>Software engineer</Typography>
          <Typography sx={styles.workPlaceTitle}>Prosper(Avenga) 2020 - 2021</Typography>
        </Box>
        <Box sx={styles.menuIcon}>
          <MoreVertIcon />
        </Box>
      </Box>
      <Typography>{text}</Typography>
      <Box sx={styles.workDutiesContainer}>
        <Typography sx={styles.workDutiesTitle}>Software engineer:</Typography>
        <Box sx={styles.workDuties}>Prosper(Avenga) 2020 - 2021</Box>
      </Box>
    </Box>
  );
};
export default WorkExperienceItem;
