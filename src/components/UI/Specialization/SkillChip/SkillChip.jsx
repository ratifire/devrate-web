import CloseIcon from '@mui/icons-material/Close';
import { Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './SkillChip.styles';

export const SkillChip = React.memo(({ skill, onDelete }) => (
  <Chip
    key={skill.id}
    deleteIcon={<CloseIcon />}
    label={<Typography variant='subtitle2'>{skill.name}</Typography>}
    sx={styles.skillItem}
    onDelete={() => onDelete(skill.id)}
  />
));

SkillChip.displayName = 'SkillChip';

SkillChip.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
