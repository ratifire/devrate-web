import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Divider } from '@mui/material';
import LinearProgressWithLabel from '../../../UI/LinearProgressWithLabel';
import CustomTooltip from '../../../UI/CustomTooltip';
import { CustomArrowCircleDownIcon } from './CustomArrowCircleDownIcon';
import { CustomArrowCircleUpIcon } from './CustomArrowCircleUpIcon';
import { styles } from './ItemSkill.styles';

const ItemSkill = ({ name, value, grows }) => {
  const icon = grows ? <CustomArrowCircleUpIcon /> : <CustomArrowCircleDownIcon />;

  return (
    <>
      <Box sx={styles.skillContainer}>
        <Box sx={styles.iconWrapper}>
          {icon}
          <CustomTooltip title={name}>
            <Typography variant='subtitle2'>{name}</Typography>
          </CustomTooltip>
        </Box>
        <LinearProgressWithLabel value={value} size='s' orientation='horizontal'/>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

ItemSkill.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  grows: PropTypes.bool.isRequired,
};

export default ItemSkill;
