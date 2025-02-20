import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useSnackbar } from 'notistack';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
} from '@redux/api/slices/specialization/specializationApiSlice';
import MAX_SKILLS from '@utils/constants/Specialization/maxSkills';
import { useGetMastery } from '@utils/hooks/specialization';
import useMergeState from '@utils/hooks/useMergeState';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { ErrorComponent } from '@components/UI/Exceptions';
import { SkillChip } from '@components/UI/Specialization/SkillChip';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { styles } from '../styles/SkillsModal.styles';
import { styles as hardSkillsStyles } from './HardSkillsModal.styles';

const initialState = {
  skill: '',
  helperText: '',
  error: false,
  idDeletedSkills: [],
  allSkills: [],
  addSkills: [],
};

const HardSkillsModal = () => {
  const [state, updateState] = useMergeState(initialState);
  const { t } = useTranslation();
  const { masteryId, isError: isErrorMastery, isFetching: isFetchingMastery } = useGetMastery();
  const { enqueueSnackbar } = useSnackbar();
  const {
    data: skills,
    isError: isErrorSkills,
    isFetching: isFetchingSkills,
  } = useGetHardSkillsByMasteryIdQuery({ masteryId }, { skip: !masteryId });
  const [addSkillToMastery, { isLoading: isLoadingAddSkill, isError: isErrorAddSkill }] =
    useAddSkillToMasteryMutation();
  const [deleteSkill, { isLoading: isLoadingDeleteSkill, isError: isErrorDeleteSkill }] = useDeleteSkillByIdMutation();

  const { skill, idDeletedSkills, allSkills, addSkills } = state;
  const isFindSkill = allSkills?.find((v) => v.name === skill.trim());
  const isLoading = isFetchingMastery || isFetchingSkills || isLoadingAddSkill || isLoadingDeleteSkill;
  const isError = isErrorMastery || isErrorSkills || isErrorAddSkill || isErrorDeleteSkill;
  const { error, helperText } = state;
  const { closeModal } = useModalController();

  useEffect(() => {
    updateState({ allSkills: skills });
  }, [isFetchingSkills]);

  const handleChange = (e) => {
    updateState({
      skill: e.target.value,
      error: false,
      helperText: '',
    });
  };

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((skill) => skill.id === skillId);

    if (isSkillExist) {
      updateState({
        error: false,
        errorText: '',
        idDeletedSkills: [...idDeletedSkills, { id: skillId, name: isSkillExist.name }],
      });
    }

    updateState({
      error: false,
      errorText: '',
      allSkills: allSkills.filter((skill) => skill.id !== skillId),
      addSkills: addSkills.filter((skill) => skill.id !== skillId),
    });
  };
  const handleAddSkill = async () => {
    updateState({
      helperText: '',
      error: false,
    });
    try {
      const isSkillInDataBase = skills.find((v) => v.name === skill);
      const skillValue = skill.trim();
      const id = isSkillInDataBase?.id || uuidv4();

      if (!skillValue) {
        throw new Error('specialization.modal.skills.errorRequired');
      }

      if (skillValue.length > 100) {
        updateState({ helperText: 'specialization.modal.skills.errorRequired', error: true });
        throw new Error('specialization.modal.skills.errorLength');
      }

      if (allSkills.length >= MAX_SKILLS) {
        updateState({ helperText: 'specialization.modal.skills.errorQuantity', error: true });
        throw new Error('specialization.modal.skills.errorQuantity');
      }

      if (isFindSkill) {
        updateState({ helperText: 'specialization.modal.skills.errorDuplicate', error: true });
        throw new Error('specialization.modal.skills.errorDuplicate');
      }

      if (allSkills.length < MAX_SKILLS && !isFindSkill && skillValue) {
        if (!isSkillInDataBase) {
          updateState({
            addSkills: [...addSkills, { id, name: skillValue }],
            error: false,
            helperText: '',
          });
        }

        updateState({
          skill: '',
          error: false,
          helperText: '',
          allSkills: [...allSkills, { id, name: skillValue }],
          idDeletedSkills: idDeletedSkills.filter((v) => v.id !== id),
        });

        enqueueSnackbar(t('modalNotifyText.hardSkills.add.success'), { variant: 'success' });
      }
    } catch (error) {
      const errorMessage = t(error.message);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addSkillPromises = addSkills.map((skill) =>
        addSkillToMastery({ masteryId, skill: { name: skill.name, type: 'HARD_SKILL' } })
      );

      const deleteSkillPromises = idDeletedSkills.map((v) => deleteSkill(v.id));

      await Promise.all([...addSkillPromises, ...deleteSkillPromises]);
      enqueueSnackbar(t('modalNotifyText.hardSkills.create.success'), { variant: 'success' });
      closeModal(modalNames.hardSkillsModal);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.hardSkills.create.error'), { variant: 'success' });
    }
  };

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('specialization.modal.skills.title')}
      </Typography>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
        <Box sx={[styles.input, hardSkillsStyles.box]}>
          <TextField
            autoFocus
            fullWidth
            error={error}
            helperText={t(helperText)}
            label={t('specialization.modal.skills.placeholder')}
            sx={hardSkillsStyles.input}
            value={skill}
            variant='outlined'
            onChange={handleChange}
          />
          <IconButton sx={styles.iconBtn} onClick={handleAddSkill}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input}>
          <Box>
            {allSkills?.map((skill) => (
              <SkillChip key={skill.id} skill={skill} onDelete={handleDeleteSkill} />
            ))}
          </Box>
        </Box>
        <ButtonDef
          disabled={addSkills.length === 0 && idDeletedSkills.length === 0}
          label={t('profile.modal.btn')}
          loading={isLoading}
          sx={styles.btn}
          type='submit'
          variant='contained'
        />
      </form>
    </>
  );
};

export default HardSkillsModal;
