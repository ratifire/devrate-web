  import React, { useMemo, useState } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './WorkExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { WorkExperienceModalSchema } from '../../../../utils/valadationSchemas/index';
import AddIcon from '@mui/icons-material/Add';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import Responsibility from '../../../UI/Responsibility';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import {
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
} from '../../../../redux/workExperience/workExperienceApiSlice';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { FormSelect } from '../../../FormsComponents/Inputs';
import { generateYearsArray } from '../../../../utils/helpers/generateYearsArray';

const WorkExperienceModal = () => {
  const dispatch = useDispatch();
  const { modalData } = useSelector((state) => state.modal);
  const workExperience = useSelector((state) => state.modal.workExperience);
  const { id } = useSelector((state) => state.auth.user.data);
  const [responsibilities, setResponsibilities] = useState(modalData?.responsibilities || []);
  const { t } = useTranslation();
  const [createNewWorkExperience] = useCreateNewWorkExperienceMutation();
  const [updateWorkExperienceById] = useUpdateWorkExperienceByIdMutation();

  const selectYears = useMemo(() => generateYearsArray(), []);
  const handleClose = () => dispatch(closeModal({ modalName: 'workExperience' }));

  const initialValues = {
    position: modalData?.position || '',
    companyName: modalData?.companyName || '',
    description: modalData?.description || '',
    responsibilities: '',
    startYear: modalData?.startYear || '',
    endYear: modalData?.endYear || '',
    currentDate: modalData?.endYear === '9999',
  };

  const onSubmit = async (values, { resetForm }) => {
    const startYear = values.startYear;
    const endYear = values.currentDate ? '9999' : values.endYear || '9999';
    const data = { ...values, startYear, endYear, responsibilities };
    try {
      if (modalData && modalData.id) {
        await updateWorkExperienceById({ id: modalData.id, data }).unwrap();
      } else {
        await createNewWorkExperience({ userId: id, data }).unwrap();
      }
    } catch (error) {
      console.error('Failed to create Work Experience', error);
    }

    setResponsibilities([]);
    resetForm();
    handleClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: WorkExperienceModalSchema,
    onSubmit,
  });

  const createResponsibility = (newResponsibility) => {
    if (newResponsibility.length < 2 || newResponsibility.length > 50) return;
    setResponsibilities([...responsibilities, newResponsibility]);
    formik.setFieldValue('responsibilities', '');
  };

  const responsibilityDeleteHandler = (responsibilityToDelete) => {
    setResponsibilities(responsibilities.filter((item) => item !== responsibilityToDelete));
  };
  
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const newValues = {
      ...formik.values,
      currentDate: isChecked,
      endYear: isChecked ? '' : formik.values.endYear || '',
    };
    formik.setValues(newValues);
  };

  return (
    <ModalLayoutProfile setOpen={handleClose} open={workExperience}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.workExperience.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              name='position'
              value={formik.values.position}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='profile.modal.workExperience.position'
              required
              placeholder='profile.modal.workExperience.position_placeholder'
              helperText={formik.touched.position && formik.errors.position}
              error={formik.touched.position && Boolean(formik.errors.position)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name='companyName'
              value={formik.values.companyName}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.companyName'
              required
              placeholder='profile.modal.workExperience.companyName_placeholder'
              helperText={formik.touched.companyName && formik.errors.companyName}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormSelect
              sx={styles.input50}
              label={t('profile.modal.workExperience.startDate')}
              value={formik.values.startYear}
              countries={selectYears}
              name='startYear'
              variant='outlined'
              required
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              helperText={formik.touched.startYear && formik.errors.startYear}
              error={formik.touched.startYear && Boolean(formik.errors.startYear)}
            />
            <FormSelect
              sx={styles.input50}
              label={t('profile.modal.workExperience.endDate')}
              value={formik.values.currentDate ? '' : formik.values.endYear}
              countries={selectYears}
              name='endYear'
              variant='outlined'
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              helperText={formik.touched.endYear && formik.errors.endYear}
              error={formik.touched.endYear && Boolean(formik.errors.endYear)}
              disabled={formik.values.currentDate}
            />
            <Box sx={styles.checkBoxContainer}>
              <FormCheckbox
                label={t('profile.modal.workExperience.currentDate')}
                checked={formik.values.currentDate}
                changeHandler={handleCheckboxChange}
                workExperience={true}
                name='currentDate'
                helperText={formik.touched.currentDate && formik.errors.currentDate}
                error={formik.touched.currentDate && Boolean(formik.errors.currentDate)}
              />
            </Box>
          </Box>

          <Box sx={styles.input100}>
            <TextAreaInput
              name='description'
              value={formik.values.description}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='profile.modal.workExperience.description'
              required
              placeholder='profile.modal.workExperience.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
              FormHelperTextProps={{
                sx: styles.error
              }}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormInput
              name='responsibilities'
              value={formik.values.responsibilities}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.responsibilities'
              required
              placeholder='profile.modal.workExperience.responsibilities_placeholder'
              helperText={formik.touched.responsibilities && formik.errors.responsibilities}
              error={formik.touched.responsibilities && Boolean(formik.errors.responsibilities)}
            />
            <IconButton sx={styles.iconBtn} onClick={() => createResponsibility(formik.values.responsibilities)}>
              <AddIcon />
            </IconButton>
          </Box>
          {!!responsibilities.length && (
            <Box sx={styles.responsibility}>
              {responsibilities.map((responsibility, index) => (
                <Responsibility
                  key={index}
                  responsibility={responsibility}
                  tobeDeleted
                  responsibilityDeleteHandler={responsibilityDeleteHandler}
                />
              ))}
            </Box>
          )}

          <ButtonDef
            variant='contained'
            type='submit'
            label={t('profile.modal.btn')}
            correctStyle={styles.workExperienceBtn}
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default WorkExperienceModal;
