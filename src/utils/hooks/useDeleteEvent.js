import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useDeleteEventByIdMutation } from '../../redux/schedule/scheduleApiSlice';

export const useDeleteEvent = () => {
  const [deleteEventById] = useDeleteEventByIdMutation();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return async ({ userId, eventId, onSuccess, onError, onFinally }) => {
    if (!userId) {
      // eslint-disable-next-line no-console
      console.error('User ID is missing');
      onError?.(new Error('User ID is missing'));
      return;
    }

    if (!eventId) {
      // eslint-disable-next-line no-console
      console.error('Event ID is missing');
      onError?.(new Error('Event ID is missing'));
      return;
    }

    try {
      await deleteEventById({ userId, id: eventId }).unwrap();
      enqueueSnackbar(t('schedule.deleteEventSuccessMessage'), { variant: 'success' });

      onSuccess?.();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to delete event:', error);
      enqueueSnackbar(t('schedule.deleteEventErrorMessage'), { variant: 'error' });
      onError?.(error);
    } finally {
      onFinally?.();
    }
  };
};
