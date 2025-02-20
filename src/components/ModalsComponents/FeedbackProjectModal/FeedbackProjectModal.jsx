import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useCreateFeedbackMutation } from '@redux/api/slices/feedbackProjectModalApiSlice.js';
import ButtonDef from '@components/FormsComponents/Buttons/ButtonDef';
import FormSelect from '@components/FormsComponents/Inputs/FormSelect';
import TextAreaInput from '@components/FormsComponents/Inputs/TextAreaInput';
import { FeedbackProjectModalSchema } from '@utils/validationSchemas/index';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { feedbackOptions } from './constants';
import { styles } from './FeedbackProjectModal.styles';

const initialValues = {
  select: '',
  feedbackText: '',
};

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useSelector((state) => state.auth.user.data);
  const { closeModal } = useModalController();

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const onSubmit = async (values) => {
    try {
      await createFeedback({
        userId: id,
        type: values.select,
        text: values.feedbackText,
      });
      enqueueSnackbar(t('modal.feedbackProjectModal.success'), { variant: 'success' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modal.feedbackProjectModal.error_429'), { variant: 'error' });
    }
    closeModal(modalNames.feedbackProjectModal);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackProjectModalSchema,
    onSubmit,
  });

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('modal.feedbackProjectModal.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <FormSelect
          isTranslated
          required
          countries={feedbackOptions}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          label={t('modal.feedbackProjectModal.formSelectLabel')}
          name='select'
          value={formik.values.select}
          variant='outlined'
        />

        <TextAreaInput
          required
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          label={t('modal.feedbackProjectModal.textAreaLabel')}
          name='feedbackText'
          placeholder={t('modal.feedbackProjectModal.textPlaceholder')}
          value={formik.values.feedbackText}
        />

        <ButtonDef
          fullWidth
          disabled={!formik.isValid || !formik.dirty || isLoading}
          label={t('modal.feedbackProjectModal.button')}
          loading={isLoading}
          sx={styles.btn}
          type='submit'
          variant='contained'
        />
      </form>
    </>
  );
};

export default FeedbackProjectModal;
