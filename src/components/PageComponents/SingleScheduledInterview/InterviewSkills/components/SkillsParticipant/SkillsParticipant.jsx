import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SkillsParticipantItem from '../SkillsParticipantItem';
import { styles } from './SkillsParticipant.styles.js';

const SkillsParticipant = ({ data, category }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' sx={styles.title} variant='h6'>
        {category}
      </Typography>
      {data.map((v) => (
        <SkillsParticipantItem key={v.id} leftGrade={v.leftGrade} name={v.name} rightGrade={v.rightGrade} />
      ))}
    </Box>
  );
};

SkillsParticipant.propTypes = {
  data: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default SkillsParticipant;
