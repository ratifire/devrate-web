import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useCreateAchievementMutation } from '@redux/api/slices/achievementsApiSlice.js';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { AchievementModalSchema } from '../../../../utils/validationSchemas/index';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { styles } from './AchievementModal.styles';

const AchievementModal = () => {
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const [createAchievement, { isLoading }] = useCreateAchievementMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { closeModal } = useModalController();

  const initialValues = {
    // link: '',
    summary: '',
    description: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await createAchievement({
        userId: id,
        payload: values,
      }).unwrap();
      enqueueSnackbar(t('modalNotifyText.achievement.create.success'), { variant: 'success' });
      resetForm();
      closeModal(modalNames.achievementModal);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.achievement.create.error'), { variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
  });

  if (!id) {
    return <Typography>Error: User not authenticated</Typography>;
  }

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('modal.achievement.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              required
              error={formik.touched.summary && Boolean(formik.errors.summary)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.summary && formik.errors.summary}
              label='modal.achievement.summary'
              name='summary'
              placeholder='modal.achievement.summary_placeholder'
              type='text'
              value={formik.values.summary}
            />
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              required
              error={formik.touched.description && Boolean(formik.errors.description)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              label='modal.achievement.description'
              name='description'
              placeholder='modal.achievement.description_placeholder'
              rows={3}
              type='text'
              value={formik.values.description}
            />
          </Box>
          <ButtonDef
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting || isLoading}
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

export default AchievementModal;
