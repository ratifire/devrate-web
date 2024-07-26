import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './SkillsItem.styles';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SkillsItem = ({ data }) => {
  const { id, name, averageMark, hidden } = data;
  const [hiddenSkill, setHiddenSkill] = useState(hidden);
  const mark = Math.round(averageMark);
  console.log(id, name, averageMark, hidden);
  // const iconArrow =
  //   averageMark > 5 ? <ArrowUpwardIcon sx={styles.arrowUpIcon} /> : <ArrowDownwardIcon sx={styles.arrowDownIcon} />;
  const iconArrow = hiddenSkill ? (
    <VisibilityOutlinedIcon sx={styles.eye} />
  ) : (
    <VisibilityOffOutlinedIcon sx={styles.eyeHidden} />
  );
  const handlerClick = () => {
    setHiddenSkill(!hiddenSkill);
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconWrapper}>
        <IconButton sx={styles.icon} onClick={handlerClick}>
          {iconArrow}
        </IconButton>
      </Box>
      <Typography variant='body1' sx={styles.text}>
        {name}
      </Typography>
      <Typography variant='h6' sx={styles.grade}>
        {mark}
      </Typography>
    </Box>
  );
};

SkillsItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkillsItem;
