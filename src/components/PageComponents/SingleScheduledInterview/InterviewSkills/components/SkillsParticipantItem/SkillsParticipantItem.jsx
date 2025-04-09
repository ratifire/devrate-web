import { Box, Divider, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsParticipantItem.styles';

const SkillsParticipantItem = ({ name, userGrade, hostGrade }) => {
  const isGradesDefined = hostGrade !== null && userGrade !== null;
  const isUserGradeDefined = userGrade === null;
  const isHostGradeDefined = hostGrade === null;

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
                value={hostGrade * 10}
                variant='determinate'
              />
              <LinearProgress
                sx={[styles.hostProgress, styles.progress]}
                value={userGrade * 10}
                variant='determinate'
              />
            </>
          )}
          {isHostGradeDefined && (
            <LinearProgress sx={[styles.userProgress, styles.progress]} value={userGrade * 10} variant='determinate' />
          )}
          {isUserGradeDefined && (
            <LinearProgress sx={[styles.hostProgress, styles.progress]} value={hostGrade * 10} variant='determinate' />
          )}
          <Typography sx={styles.grade}>
            {isGradesDefined && (
              <>
                {hostGrade}:{userGrade}
              </>
            )}
            {isHostGradeDefined && <>{userGrade}/10</>}
            {isUserGradeDefined && <>{hostGrade}/10</>}
          </Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

SkillsParticipantItem.propTypes = {
  name: PropTypes.string.isRequired,
  userGrade: PropTypes.number.isRequired,
  hostGrade: PropTypes.number.isRequired,
};

export default SkillsParticipantItem;
