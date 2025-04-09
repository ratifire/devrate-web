import { Box, Divider, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsParticipantItem.styles';

const SkillsParticipantItem = ({ name, leftGrade, rightGrade }) => {
  const isGradesDefined = rightGrade !== null && leftGrade !== null;
  const isUserGradeDefined = leftGrade === null;
  const isHostGradeDefined = rightGrade === null;

  return (
    <>
      <Box sx={styles.wrapper}>
        <CustomTooltip title={name} variant='body'>
          {name}
        </CustomTooltip>
        <Box sx={styles.boxProgress}>
          {isGradesDefined && (
            <>
              <LinearProgress
                sx={[styles.userProgress, styles.progress]}
                value={rightGrade * 10}
                variant='determinate'
              />
              <LinearProgress
                sx={[styles.hostProgress, styles.progress]}
                value={leftGrade * 10}
                variant='determinate'
              />
            </>
          )}
          {isHostGradeDefined && (
            <LinearProgress sx={[styles.userProgress, styles.progress]} value={leftGrade * 10} variant='determinate' />
          )}
          {isUserGradeDefined && (
            <LinearProgress sx={[styles.hostProgress, styles.progress]} value={rightGrade * 10} variant='determinate' />
          )}
          <Typography sx={styles.grade}>
            {isGradesDefined && (
              <>
                {rightGrade}:{leftGrade}
              </>
            )}
            {isHostGradeDefined && <>{leftGrade}/10</>}
            {isUserGradeDefined && <>{rightGrade}/10</>}
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
