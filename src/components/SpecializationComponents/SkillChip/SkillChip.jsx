import React from 'react';
import { Chip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from '../../SpecializationModals/SoftSkillsModal/SoftSkillsModal.styles';
import PropTypes from 'prop-types';


export const SkillChip = React.memo(({ skill, onDelete }) => (
  <Chip
    key={skill.id}
    label={<Typography variant='subtitle2'>{skill.name}</Typography>}
    onDelete={() => onDelete(skill.id)}
    deleteIcon={<CloseIcon />}
    sx={styles.skillItem}
  />
));

SkillChip.displayName = 'SkillChip';

SkillChip.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};