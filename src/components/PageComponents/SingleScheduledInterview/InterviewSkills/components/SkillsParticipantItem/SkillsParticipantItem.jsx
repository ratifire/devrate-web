import { Box, Divider, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsParticipantItem.styles';

const SkillsParticipantItem = ({ name, leftGrade, rightGrade }) => {
  const isGradesDefined = rightGrade !== null && leftGrade !== null;
  const isLeftGradeDefined = leftGrade === null;
  const isRightGradeDefined = rightGrade === null;

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
                sx={[styles.leftProgress, styles.progress]}
                value={leftGrade * 10}
                variant='determinate'
              />
              <LinearProgress
                sx={[styles.rightProgress, styles.progress]}
                value={rightGrade * 10}
                variant='determinate'
              />
            </>
          )}
          {isRightGradeDefined && (
            <LinearProgress sx={[styles.leftProgress, styles.progress]} value={leftGrade * 10} variant='determinate' />
          )}
          {isLeftGradeDefined && (
            <LinearProgress
              sx={[styles.rightProgress, styles.progress]}
              value={rightGrade * 10}
              variant='determinate'
            />
          )}
          <Typography sx={styles.grade}>
            {isGradesDefined && (
              <>
                {leftGrade}:{rightGrade}
              </>
            )}
            {isRightGradeDefined && <>{leftGrade}/10</>}
            {isLeftGradeDefined && <>{rightGrade}/10</>}
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
