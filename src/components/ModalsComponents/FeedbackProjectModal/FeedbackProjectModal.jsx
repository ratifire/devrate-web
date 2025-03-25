import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useForm } from '@tanstack/react-form';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useStore } from '@tanstack/react-form';
import { useCreateFeedbackMutation } from '@redux/api/slices/feedbackProjectModalApiSlice.js';
import ButtonDef from '@components/FormsComponents/Buttons/ButtonDef';
import FormSelect from '@components/FormsComponents/Inputs/FormSelect';
import TextAreaInput from '@components/FormsComponents/Inputs/TextAreaInput';
import { FeedbackProjectModalSchema } from '@utils/validationSchemas/index';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { feedbackOptions } from './constants';
import { styles } from './FeedbackProjectModal.styles';

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useSelector((state) => state.auth.user.data);
  const { closeModal } = useModalController();

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const form = useForm({
    defaultValues: {
      select: '',
      feedbackText: '',
    },
    validators: { onChange: FeedbackProjectModalSchema },
    onSubmit: async ({ value }) => {
      try {
        await createFeedback({
          userId: id,
          type: value.select,
          text: value.feedbackText,
        });
        enqueueSnackbar(t('modal.feedbackProjectModal.success'), { variant: 'success' });
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        enqueueSnackbar(t('modal.feedbackProjectModal.error_429'), { variant: 'error' });
      }
      closeModal(modalNames.feedbackProjectModal);
    },
  });

  const isDirty = useStore(form.store, (state) => state.isDirty);
  const isValid = useStore(form.store, (state) => state.isValid);

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('modal.feedbackProjectModal.title')}
      </Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field name='select'>
          {(field) => (
            <FormSelect
              isTranslated
              required
              countries={feedbackOptions}
              error={field.state?.meta?.errors?.length > 0}
              handleBlur={field.handleBlur}
              handleChange={(e) => {
                field.handleChange(e.target.value);
              }}
              helperText={t(field.state?.meta?.errors[0]?.message)}
              label={t('modal.feedbackProjectModal.formSelectLabel')}
              name={field.name}
              value={field.state.value}
              variant='outlined'
            />
          )}
        </form.Field>

        <form.Field name='feedbackText'>
          {(field) => (
            <TextAreaInput
              required
              error={field.state?.meta?.errors?.length > 0}
              handleBlur={field.handleBlur}
              handleChange={(e) => {
                field.handleChange(e.target.value);
              }}
              helperText={t(field.state?.meta?.errors[0]?.message)}
              label={t('modal.feedbackProjectModal.textAreaLabel')}
              name={field.name}
              placeholder={t('modal.feedbackProjectModal.textPlaceholder')}
              value={field.state.value}
            />
          )}
        </form.Field>

        <ButtonDef
          fullWidth
          disabled={!isDirty || !isValid}
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
