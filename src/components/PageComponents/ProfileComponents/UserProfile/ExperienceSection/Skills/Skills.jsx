import React, { useEffect, useState } from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { styles } from './Skills.styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';
import SkillsItem from './SkillsItem';
import CustomTooltip from '../../../../../UI/CustomTooltip';
import TextAreaSearch from '../../../../../FormsComponents/Inputs/TextAreaSearch';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import SearchIcon from '@mui/icons-material/Search';
import { sortedSkills } from '../../../../../../utils/helpers/sortedSkills';
import { sortSkillsByOriginal } from '../../../../../../utils/helpers/sortedSkillsByOriginal';
import { useGetUserAllSpecializationQuery } from '../../../../../../redux/user/personal/personalApiSlice';
import { updateAllSpecializations } from './updateAllSpecialization';

const Skills = ({ id, tab, profileType, imgUrl }) => {
  const [specCurrent, setSpecCurrent] = useState('');
  const { data: userAllSpecializations, isLoading } = useGetUserAllSpecializationQuery(id);
  
  const updateAllSpecialization = userAllSpecializations ? updateAllSpecializations(userAllSpecializations) : [];
  const selectedSpecialization = updateAllSpecialization?.find((s) => s.specializationName === specCurrent);

  const level = selectedSpecialization?.masteryName;
  
  const skillVisible = selectedSpecialization?.hardSkills.filter((item) => item.hidden === true);
  
  const [filteredSkills, setFilteredSkills] = useState(skillVisible);
  
  const [open, setOpen] = useState(false);
  
  const [srtSearch, setSrtSearch] = useState('');
  
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
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSrtSearch(value);
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
    const loverValue = srtSearch.toLowerCase();
    
    if (loverValue.trim() === '') {
      setFilteredSkills(skillVisible);
    } else {
      const result = sortedSkills(loverNameHardSkills, loverValue);
      const sortedOriginal = sortSkillsByOriginal(skillVisible, result);
      setFilteredSkills(sortedOriginal);
    }
  };
  
  if (isLoading || !userAllSpecializations || userAllSpecializations.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl} />;
  }
  
  return (
    <Box sx={styles.wrapper}>
      <Box sx={open ? styles.skillBg : styles.skill}>
        <Box sx={styles.info}>
          <Box sx={styles.wrapperSelect}>
            {selectedSpecialization?.mainSpecialization &&
              <CustomTooltip title="profile.experience.skills.star" translate={true}>
                <StarIcon sx={styles.star} />
              </CustomTooltip>}
            <Select
              sx={styles.select}
              value={specCurrent}
              onChange={handleChange}
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              IconComponent={KeyboardArrowDownIcon}
              variant="standard"
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: styles.selectPaper,
                  },
                },
              }}
            >
              {updateAllSpecialization?.map((item) => (
                <MenuItem key={item.specializationName} value={item.specializationName} sx={styles.selectItem}>
                  {item.specializationName}
                  {item.mainSpecialization && <StarIcon sx={styles.selectItemStar} />}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography sx={styles.text} className={level} variant="subtitle2">Level <span>{level}</span></Typography>
        </Box>
        <Box sx={styles.list}>
          {srtSearch.trim() === '' ? skillVisible?.map((item) => <SkillsItem key={item.id} data={item}  isSorted={item.isSorted}/>) :
            filteredSkills?.map((item) => <SkillsItem key={item.id} data={item} isSorted={item.isSorted}/>)}
        </Box>
      </Box>
      <Box sx={styles.wrapperSearch}>
        <Box sx={styles.search}>
          <TextAreaSearch
            value={srtSearch}
            handleChange={handleChangeSearch}
          />
          <IconButton onClick={handleClick} type="button" sx={styles.btnIcon}>
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
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Skills;
