import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useGetSoftSkillsQuery } from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();

  const {
    data: skills = [],
    isLoading: isLoadingSoftSkill,
    isError: isErrorSoftSkill,
  } = useGetSoftSkillsQuery(masteryId, { skip: !masteryId });

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSoftSkillsModal' }));
  };

  const isLoading = isLoadingMastery || isLoadingSoftSkill;
  const isError = isErrorMastery || isErrorSoftSkill;

  const averageMark =
    skills?.length > 0 ? (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) : '0';

  return (
    <SpecializationSkills
      isLoading={isLoading}
      isError={isError}
      skills={skills}
      averageMark={averageMark}
      openModal={handleModalOpen}
      subTitle='specialization.hardSkills.averageMark'
      errorTitle='specialisation.hardSkills.error'
      title='specialization.softSkills.title'
    />
  );
};

export default SoftSkills;
