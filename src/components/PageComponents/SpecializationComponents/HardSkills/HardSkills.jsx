/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useUserSkillsAndMasteryData } from '../Statistics/utils';
import { SpecializationSkills } from '../../../UI/SpecializationSkills';

const HardSkills = () => {
  const { t, skills, isError, isLoading, activeMastery } = useUserSkillsAndMasteryData();
  const dispatch = useDispatch();
  
  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal', activeMastery }));
  };

  const averageMark = skills.length > 0 ?
    (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1)
    : '0';

  return <SpecializationSkills
    isLoading={isLoading}
    skills={skills}
    averageMark={averageMark}
    isError={isError}
    openModal={handleModalOpen}
    subTitle='specialization.hardSkills.averageMark'
    errorTitle='specialisation.hardSkills.error'
    title='specialization.hardSkills.title'
  />

};

export default HardSkills;
