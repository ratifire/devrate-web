import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import SkillsItem from '../SkillsItem';
import CustomTooltip from '../../../../../../UI/CustomTooltip';
import { styles } from './SkillsList.styles';

const SkillsList = ({ data, length }) => {
  const { specializationName, mainSpecialization, masteryLevel, hardSkills } = data;
  const flexValue =
    length === 1
      ? hardSkills.length === 1
        ? { flex: '0 1 100%' }
        : { flex: '0 1 calc(50% - 10px)' }
      : { flex: '0 1 100%' };
  const level = masteryLevel || 'N/A';

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleWrapper}>
        {mainSpecialization ? (
          <>
            <CustomTooltip translate title='profile.experience.skills.star'>
              <StarIcon sx={styles.star} />
            </CustomTooltip>
            <CustomTooltip title={specializationName}>
              <Typography sx={styles.title} variant='h6'>
                {specializationName}
              </Typography>
            </CustomTooltip>
          </>
        ) : (
          <CustomTooltip title={specializationName}>
            <Typography sx={styles.title} variant='h6'>
              {specializationName}
            </Typography>
          </CustomTooltip>
        )}
      </Box>
      <Typography className={level} sx={styles.text} variant='subtitle2'>
        Level <span>{level}</span>
      </Typography>
      <Box sx={styles.list}>
        {hardSkills?.map((skill) => (
          <SkillsItem key={skill.id} data={skill} flex={flexValue} />
        ))}
      </Box>
    </Box>
  );
};

SkillsList.propTypes = {
  data: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
};

export default SkillsList;
