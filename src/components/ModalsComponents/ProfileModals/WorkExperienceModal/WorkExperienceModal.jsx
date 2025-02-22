import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from 'notistack';
import { WorkExperienceModalSchema } from '../../../../utils/validationSchemas';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import Responsibility from '../../../UI/Responsibility';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useCreateNewWorkExperienceMutation } from '../../../../redux/services/workExperienceApiSlice.js';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { FormSelect } from '../../../FormsComponents/Inputs';
import { generateYearsArray } from '../../../../utils/helpers/dateHandlers.js';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { addUniqueItem } from '../../../../utils/helpers/ProfileWorkExperience/addUniqueItem.js';
import { styles } from './WorkExperienceModal.styles';

const WorkExperienceModal = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [responsibilities, setResponsibilities] = useState([]);
  const { t } = useTranslation();
  const [createNewWorkExperience, { isLoading }] = useCreateNewWorkExperienceMutation();
  const { enqueueSnackbar } = useSnackbar();

  const { closeModal } = useModalController();

  const selectYears = useMemo(() => generateYearsArray(), []);

  const initialValues = {
    position: '',
    companyName: '',
    description: [],
    responsibilities: '',
    startYear: '',
    endYear: '',
    currentDate: '',
  };
  const onSubmit = async (values, { resetForm }) => {
    try {
      const { startYear, endYear, currentDate } = values;
      const formattedEndYear = currentDate ? '9999' : endYear || '9999';
      const data = {
        ...values,
        startYear,
        endYear: formattedEndYear,
        responsibilities,
      };
      await createNewWorkExperience({ userId: id, data }).unwrap();
      enqueueSnackbar(t('modalNotifyText.workExperience.create.success'), { variant: 'success' });
      setResponsibilities([]);
      resetForm();
      closeModal(modalNames.workExperienceModal);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.workExperience.create.error'), { variant: 'error' });
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: WorkExperienceModalSchema,
    onSubmit,
  });

  const createResponsibility = (newResponsibility) => {
    const updatedResponsibilities = addUniqueItem(responsibilities, newResponsibility);

    if (updatedResponsibilities.length === responsibilities.length) {
      enqueueSnackbar(t('modalNotifyText.workExperience.create.duplicateResponsibility'), { variant: 'warning' });
      formik.setFieldValue('responsibilities', '');
      return;
    }

    setResponsibilities(updatedResponsibilities);
    formik.setFieldValue('responsibilities', '');
  };

  const responsibilityDeleteHandler = (responsibilityToDelete) => {
    setResponsibilities(responsibilities.filter((item) => item !== responsibilityToDelete));
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    formik.setFieldValue('currentDate', isChecked);
    formik.setFieldValue('endYear', isChecked ? '9999' : formik.values.endYear || '');
  };

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('profile.modal.workExperience.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.inputWrapper}>
            <Box sx={styles.input50}>
              <FormInput
                required
                error={formik.touched.position && Boolean(formik.errors.position)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.position && formik.errors.position}
                label='profile.modal.workExperience.position'
                name='position'
                placeholder='profile.modal.workExperience.position_placeholder'
                type='text'
                value={formik.values.position}
              />
            </Box>
            <Box sx={styles.input50}>
              <FormInput
                required
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.companyName && formik.errors.companyName}
                label='profile.modal.workExperience.companyName'
                name='companyName'
                placeholder='profile.modal.workExperience.companyName_placeholder'
                value={formik.values.companyName}
              />
            </Box>
            <Box sx={styles.input100}>
              <FormSelect
                required
                countries={selectYears}
                error={formik.touched.startYear && Boolean(formik.errors.startYear)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.startYear && formik.errors.startYear}
                label={t('profile.modal.workExperience.startDate')}
                name='startYear'
                sx={styles.input50}
                value={formik.values.startYear}
                variant='outlined'
              />
              <FormSelect
                countries={selectYears}
                disabled={formik.values.currentDate}
                error={formik.touched.endYear && Boolean(formik.errors.endYear)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.endYear && formik.errors.endYear}
                label={t('profile.modal.workExperience.endDate')}
                name='endYear'
                sx={styles.input50}
                value={formik.values.currentDate ? '' : formik.values.endYear}
                variant='outlined'
              />
              <Box sx={styles.checkBoxContainer}>
                <FormCheckbox
                  workExperience
                  changeHandler={handleCheckboxChange}
                  checked={formik.values.currentDate}
                  error={formik.touched.currentDate && Boolean(formik.errors.currentDate)}
                  helperText={formik.touched.currentDate && formik.errors.currentDate}
                  label={t('profile.modal.workExperience.currentDate')}
                  name='currentDate'
                />
              </Box>
            </Box>

            <Box sx={styles.input100}>
              <TextAreaInput
                required
                FormHelperTextProps={{
                  sx: styles.error,
                }}
                error={formik.touched.description && Boolean(formik.errors.description)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.description && formik.errors.description}
                label='profile.modal.workExperience.description'
                name='description'
                placeholder='profile.modal.workExperience.description_placeholder'
                type='text'
                value={formik.values.description}
              />
            </Box>
            <Box sx={styles.input100}>
              <FormInput
                required
                error={formik.touched.responsibilities && Boolean(formik.errors.responsibilities)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.responsibilities && formik.errors.responsibilities}
                label='profile.modal.workExperience.responsibilities'
                name='responsibilities'
                placeholder='profile.modal.workExperience.responsibilities_placeholder'
                value={formik.values.responsibilities}
              />
              <IconButton sx={styles.iconBtn} onClick={() => createResponsibility(formik.values.responsibilities)}>
                <AddIcon />
              </IconButton>
            </Box>
            {!!responsibilities.length && (
              <Box sx={styles.responsibility}>
                {responsibilities.map((responsibility, index) => (
                  <Responsibility
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    tobeDeleted
                    responsibility={responsibility}
                    responsibilityDeleteHandler={responsibilityDeleteHandler}
                  />
                ))}
              </Box>
            )}
          </Box>
          <ButtonDef
            disabled={!formik.isValid || formik.isSubmitting || isLoading || responsibilities.length === 0}
            label={t('profile.modal.btn')}
            loading={isLoading}
            sx={styles.workExperienceBtn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </>
  );
};

export default WorkExperienceModal;
