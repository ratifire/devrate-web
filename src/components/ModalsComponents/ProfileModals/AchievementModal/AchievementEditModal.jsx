import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useUpdateAchievementMutation } from '../../../../redux/services/achievementsApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { AchievementModalSchema } from '../../../../utils/validationSchemas/index';
import { closeModal, selectModalData } from '../../../../redux/modal/modalSlice.js';
import { styles } from './AchievementModal.styles';

const AchievementEditModal = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const modalData = useSelector(selectModalData);
  const { t } = useTranslation();
  const [updateAchievementApi, { isLoading }] = useUpdateAchievementMutation();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    // link: achievement?.link || '',
    summary: modalData?.summary || '',
    description: modalData?.description || '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await updateAchievementApi({
        id: modalData?.id,
        payload: { ...values, userId }, // Including userId in the payload
      }).unwrap();
      enqueueSnackbar(t('modalNotifyText.achievement.edit.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });

      resetForm();
      dispatch(closeModal({ modalType: 'achievementEditModal' }));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.achievement.edit.error'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('modal.achievement.title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              error={formik.touched.summary && Boolean(formik.errors.summary)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.summary && formik.errors.summary}
              label='modal.achievement.summary'
              name='summary'
              placeholder='profile.modal.workExperience.position_placeholder'
              type='text'
              value={formik.values.summary}
            />
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              error={formik.touched.description && Boolean(formik.errors.description)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              label='modal.achievement.description'
              name='description'
              placeholder='profile.modal.workExperience.description_placeholder'
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

export default AchievementEditModal;
