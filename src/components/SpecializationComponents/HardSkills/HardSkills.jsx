// HardSkills.jsx
import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { styles } from './HardSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import CustomArrowCircleDownIcon from './CustomArrowCircleDownIcon';
import CustomArrowCircleUpIcon from './CustomArrowCircleUpIcon.jsx';
import SmallLinearProgressWithLabel from './SmallLinearProgressWithLabel.jsx';

const skills = [
  { name: 'Laravel', value: 5, icon: <CustomArrowCircleDownIcon /> },
  { name: 'Symphony', value: 9, icon: <CustomArrowCircleUpIcon /> },
  { name: 'Zend Framework', value: 3, icon: <CustomArrowCircleDownIcon /> },
  { name: 'PostgreSQL', value: 8, icon: <CustomArrowCircleUpIcon /> },
  { name: 'RESTful API', value: 8, icon: <CustomArrowCircleUpIcon /> },
  { name: 'GitHub/GitLab/Bitbucket', value: 7, icon: <CustomArrowCircleDownIcon /> },
  { name: 'Docker', value: 10, icon: <CustomArrowCircleUpIcon /> },
];

const HardSkills = () => {
  const averageMark = skills.reduce((acc, skill) => acc + skill.value, 0) / skills.length;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{'Hard skills'}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information'>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <Box sx={styles.skillContainer}>
              <Box sx={styles.iconWrapper}>
                {skill.icon}
                <Typography variant='subtitle2'>{skill.name}</Typography>
              </Box>
              <SmallLinearProgressWithLabel value={skill.value} />
            </Box>
            <Divider sx={styles.divider} />
          </React.Fragment>
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{'Average mark:'}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark.toFixed(1)}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default HardSkills;
