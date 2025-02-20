import { useEffect, useState } from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { useGetUserAllSpecializationQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { sortedSkills } from '@utils/helpers/sortedSkills';
import { sortSkillsByOriginal } from '@utils/helpers/sortedSkillsByOriginal';
import { emptyUserTabsPictures } from '@utils/constants/emptyTabsPictures';
import TextAreaSearch from '../../../../../FormsComponents/Inputs/TextAreaSearch';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import StarMainSpecialization from '../../../../../UI/StarMainSpecialization';
import { updateAllSpecializations } from './updateAllSpecialization';
import SkillsItem from './SkillsItem';
import { styles } from './Skills.styles';

const Skills = ({ id, tab }) => {
  const [specCurrent, setSpecCurrent] = useState('');
  const { data: userAllSpecializations, isLoading } = useGetUserAllSpecializationQuery(id, { skip: !id });
  const updateAllSpecialization = userAllSpecializations ? updateAllSpecializations(userAllSpecializations) : [];
  const selectedSpecialization = updateAllSpecialization?.find((s) => s.specializationName === specCurrent);
  const level = selectedSpecialization?.masteryLevel;
  const skillVisible = selectedSpecialization?.hardSkills.filter((item) => item.hidden === true);
  const [filteredSkills, setFilteredSkills] = useState(skillVisible);
  const [open, setOpen] = useState(false);
  const [strSearch, setStrSearch] = useState('');
  const loverNameHardSkills = skillVisible?.map((item) => ({
    ...item,
    name: item.name.toLowerCase(),
  }));

  useEffect(() => {
    if (userAllSpecializations && userAllSpecializations.length > 0) {
      const mainSpecialization = userAllSpecializations.find((item) => item.mainSpecialization);
      if (mainSpecialization) {
        setSpecCurrent(mainSpecialization.specializationName);
      }
    }
  }, [userAllSpecializations]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSpecCurrent(value);
    setStrSearch('');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setStrSearch(value);
    const loverValue = value.toLowerCase();

    if (loverValue.trim() === '') {
      setFilteredSkills(skillVisible);
    } else {
      const result = sortedSkills(loverNameHardSkills, loverValue);
      const sortedOriginal = sortSkillsByOriginal(skillVisible, result);
      setFilteredSkills(sortedOriginal);
    }
  };

  const handleClick = () => {
    const loverValue = strSearch.toLowerCase();

    if (loverValue.trim() === '') {
      setFilteredSkills(skillVisible);
    } else {
      const result = sortedSkills(loverNameHardSkills, loverValue);
      const sortedOriginal = sortSkillsByOriginal(skillVisible, result);
      setFilteredSkills(sortedOriginal);
    }
  };

  if (isLoading || !userAllSpecializations || userAllSpecializations.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyUserTabsPictures.emptySkillsPic} profileType='user' tab={tab} />;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={open ? styles.skillBg : styles.skill}>
        <Box sx={styles.info}>
          <Box sx={styles.wrapperSelect}>
            {selectedSpecialization?.mainSpecialization && (
              <StarMainSpecialization title='profile.experience.skills.star' />
            )}
            <Select
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: styles.selectPaper,
                  },
                },
              }}
              open={open}
              sx={styles.select}
              value={specCurrent}
              variant='standard'
              onChange={handleChange}
              onClose={handleClose}
              onOpen={handleOpen}
            >
              {updateAllSpecialization?.map((item) => (
                <MenuItem key={item.specializationName} sx={styles.selectItem} value={item.specializationName}>
                  {item.specializationName}
                  {item.mainSpecialization && <StarIcon sx={styles.selectItemStar} />}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {!!level && (
            <Typography className={level} sx={styles.text} variant='subtitle2'>
              Level <span>{level}</span>
            </Typography>
          )}
        </Box>
        <Box sx={styles.list}>
          {strSearch.trim() === ''
            ? skillVisible?.map((item) => <SkillsItem key={item.id} data={item} isSorted={item.isSorted} />)
            : filteredSkills?.map((item) => <SkillsItem key={item.id} data={item} isSorted={item.isSorted} />)}
        </Box>
      </Box>
      <Box sx={styles.wrapperSearch}>
        <Box sx={styles.search}>
          <TextAreaSearch handleChange={handleChangeSearch} value={strSearch} />
          <IconButton sx={styles.btnIcon} type='button' onClick={handleClick}>
            <SearchIcon />
            {'Пошук'}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

Skills.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
};

export default Skills;
