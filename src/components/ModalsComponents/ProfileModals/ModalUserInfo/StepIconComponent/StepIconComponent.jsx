import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { styles } from './StepIconComponent.style';

function CustomStepIcon(props) {
  const { active, completed, icon } = props;
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box
      sx={[
        style.root,
        completed && style.completed,
        active && style.active,
      ]}
    >
      {icon}
    </Box>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
};

export default CustomStepIcon;
