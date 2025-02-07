import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import ButtonDef from '../../FormsComponents/Buttons/ButtonDef';
import FormSelect from '../../FormsComponents/Inputs/FormSelect';
import TextAreaInput from '../../FormsComponents/Inputs/TextAreaInput';
import { closeModal } from '../../../redux/modal/modalSlice';
import { FeedbackProjectModalSchema } from '../../../utils/validationSchemas/index';
import { useCreateFeedbackMutation } from '../../../redux/services/feedbackProjectModalApiSlice';
import { modalNames } from '../../../utils/constants/modalNames.js';
import { feedbackOptions } from './constants';
import { styles } from './FeedbackProjectModal.styles';

const initialValues = {
  select: '',
  feedbackText: '',
};

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth.user.data);

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const handleClose = () => {
    dispatch(closeModal({ modalType: modalNames.feedbackProjectModal }));
  };

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
    handleClose();
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
