import React, { useState, useEffect } from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { styles } from './Skills.styles';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../../redux/specialization/specializationApiSlice';
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

const Skills = ({ id, tab, profileType, imgUrl }) => {
  const [specCurrent, setSpecCurrent] = useState('');
  
  const { data: specializations , isLoading } = useGetSpecializationByUserIdQuery(id);
  
  const selectedSpecialization = specializations?.find((s) => s.name === specCurrent);
  
  const { data: specializationsLevel } = useGetMainMasteryBySpecializationIdQuery(selectedSpecialization?.id);
  
  const level = specializationsLevel?.level;
  
  const { data: skills = [] } = useGetHardSkillsByMasteryIdQuery(
    { id, masteryId: specializationsLevel?.id },
    { skip: !specializationsLevel?.id },
  );
  
  const skillVisible = skills.filter((item) => item.hidden === true);
  const [filteredSkills, setFilteredSkills] = useState(skillVisible);

  //Select
  const [open, setOpen] = useState(false);
  //Select
  //textarea
  const [srtSearch, setSrtSearch] = useState('');
  //textarea
  
  const loverNameHardSkills = skillVisible.map((item) => ({
    ...item,
    name: item.name.toLowerCase(),
  }));
  
  //Select
  useEffect(() => {
    if (specializations && specializations.length > 0) {
      const mainSpecialization = specializations.find((item) => item.main);
      if (mainSpecialization) {
        setSpecCurrent(mainSpecialization.name);
      }
    }
  }, [specializations]);
  
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
  //Select
  //textarea
  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSrtSearch(value);
    const loverValue = value.toLowerCase();
    
    if (loverValue.trim() === '') {
      setFilteredSkills(skillVisible);
    } else {
      const result = sortedSkills(loverNameHardSkills, loverValue);
      const sortedOriginal = sortSkillsByOriginal(skillVisible,result);
      setFilteredSkills(sortedOriginal);
    }
  };
  //textarea
  
  //button
  const handleClick = () => {
    const loverValue = srtSearch.toLowerCase();
    
    if (loverValue.trim() === '') {
      setFilteredSkills(skillVisible);
    } else {
      const result = sortedSkills(loverNameHardSkills, loverValue);
      const sortedOriginal = sortSkillsByOriginal(skillVisible,result);
      setFilteredSkills(sortedOriginal);
    }
  };
  //button
  
  if (isLoading || !specializations || specializations.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
  }
  
  return (
    <Box sx={styles.wrapper}>
      <Box sx={open ? styles.skillBg : styles.skill}>
        <Box sx={styles.info}>
          <Box sx={styles.wrapperSelect}>
            {selectedSpecialization?.main &&
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
              {specializations && specializations.map((item) => (
                <MenuItem key={item.id} value={item.name} sx={styles.selectItem}>
                  {item.name}
                  {item.main && <StarIcon sx={styles.selectItemStar} />}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography sx={styles.text} className={level} variant="subtitle2">Level {level}</Typography>
        </Box>
        <Box sx={styles.list}>
          {srtSearch.trim() === '' ? skillVisible?.map((item) => <SkillsItem key={item.id} data={item} />) :
            filteredSkills?.map((item) => <SkillsItem key={item.id} data={item} />)}
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
