import React, { useEffect, useState  } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Box, IconButton, Typography, Chip, TextField, CircularProgress } from '@mui/material';
import { styles } from '../SpecializationModal/SpecializationModal.styles';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { useGetHardSkillsByMasteryIdQuery } from '../../../redux/specialization/specializationApiSlice';




const SkillsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const { id } = useSelector((state) => state.auth.user.data);
  const user = useSelector(selectCurrentUser);


  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));

  const { data: skills = [], isLoading, isError } = useGetHardSkillsByMasteryIdQuery({
    userId: user.id,
    masteryId,
  });

  const [selectedSkill, setSelectedSkill] = useState('');
  const [errorSkill, setErrorSkill] = useState(false);
  const [helperTextSkill, setHelperTextSkill] = useState('');

  const onSubmit = () => {
    // Logic for form submission
    onClose();
  }

  const formik = useFormik({
    initialValues: {
      skills: [],
    },
    onSubmit,
  });

  useEffect(() => {
    if (skills.length > 0) {
      formik.setFieldValue('skills', skills);
    }
  }, [skills]);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
    setErrorSkill(false);
    setHelperTextSkill('');
  };

  const createSkill = () => {
    let hasError = false;

    if (!selectedSkill) {
      setErrorSkill(true);
      setHelperTextSkill('profile.modal.userInfo.skills.selectSkill');
      hasError = true;
    }

    if (formik.values.skills.some((item) => item.name === selectedSkill)) {
      setErrorSkill(true);
      setHelperTextSkill('profile.modal.userInfo.skills.skillAdded');
      hasError = true;
    }

    if (!hasError) {
      const newSkill = {
        name: selectedSkill,
        code: selectedSkill,
      };
      formik.setFieldValue('skills', [...formik.values.skills, newSkill]);
      setSelectedSkill('');
    }
  };

  const skillDeleteHandler = (skillToDelete) => {
    formik.setFieldValue(
      'skills',
      formik.values.skills.filter((item) => item.name !== skillToDelete)
    );
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>{t('specialisation.skillsModal.error')}</Typography>;
  }

    

  

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
       <Box sx={styles.modalContent}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialisation.skillsModal.title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <TextField
            variant='outlined'
            value={selectedSkill}
            onChange={handleSkillChange}
            label={t('specialisation.skillsModal.placeholder')}
            helperText={helperTextSkill && t(helperTextSkill)}
            error={errorSkill}
            fullWidth
          />
          <IconButton sx={styles.iconBtn} onClick={createSkill}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input100}>
          <Box sx={styles.wrapperSkills}>
            {formik.values.skills.map((skill) => (
              <Chip
                key={skill.name}
                label={<Typography variant="subtitle2">{skill.name}</Typography>}
                onDelete={() => skillDeleteHandler(skill.name)}
                deleteIcon={<CloseIcon />}
                sx={styles.skillItem}
              />
            ))}
          </Box>
        </Box>
        <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.btn} />
      </form>
    </Box>
    </ModalLayoutProfile>);
};

export default SkillsModal;