import { Box, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';
import SkillsItem from '../SkillsItem';
import CustomTooltip from '../../../../../../UI/CustomTooltip';
import StarMainSpecialization from '../../../../../../UI/StarMainSpecialization';
import { styles } from './SkillsList.styles';

const SkillsList = ({ data, length }) => {
  const box = useRef(null);
  const [boxHeight, setBoxHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1272px)');
  const { specializationName, mainSpecialization, masteryLevel, hardSkills } = data;
  const flexValue = length === 1 ? (hardSkills.length === 1 ? styles.flex100 : styles.flex50) : styles.flex100;

  const toggleAccordion = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (box.current) {
      setBoxHeight(box.current.scrollHeight);
    }
  }, [hardSkills]);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.accordion} onClick={toggleAccordion}>
        <Box sx={styles.titleWrapper}>
          {mainSpecialization ? (
            <>
              <StarMainSpecialization title='profile.experience.skills.star' />
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
        <Typography className={masteryLevel} sx={styles.text} variant='subtitle2'>
          Level <span>{masteryLevel}</span>
        </Typography>
        <ExpandMoreIcon
          sx={{
            ...styles.iconBtn,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Box>
      <Box
        ref={box}
        sx={{
          height: isMobile ? (isOpen ? `${boxHeight}px` : '0px') : 'auto',
          overflow: isMobile ? 'hidden' : 'visible',
        }}
      >
        {hardSkills?.map((skill) => (
          <SkillsItem key={skill.id} data={skill} flex={flexValue} isOpen={isOpen} />
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
