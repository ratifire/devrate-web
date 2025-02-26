import { Box, Divider, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsParticipantItem.styles';

const SkillsParticipantItem = ({ name, leftGrade, rightGrade }) => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <CustomTooltip title={name} variant='body'>
          {name}
        </CustomTooltip>
        <Box sx={styles.boxProgress}>
          <LinearProgress sx={[styles.leftProgress, styles.progress]} value={leftGrade * 10} variant='determinate' />
          <LinearProgress sx={[styles.rightProgress, styles.progress]} value={rightGrade * 10} variant='determinate' />
          <Typography>
            {leftGrade}:{rightGrade}
          </Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

SkillsParticipantItem.propTypes = {
  name: PropTypes.string.isRequired,
  leftGrade: PropTypes.number.isRequired,
  rightGrade: PropTypes.number.isRequired,
};

export default SkillsParticipantItem;
