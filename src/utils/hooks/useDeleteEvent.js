import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useDeleteEventByIdMutation } from '../../redux/schedule/scheduleApiSlice';

export const useDeleteEvent = () => {
  const [deleteEventById] = useDeleteEventByIdMutation();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return async ({ userId, eventId, onSuccess, onError, onFinally }) => {
    if (!userId) {
      if (!onError) {
        enqueueSnackbar(t('schedule.missingUserIdErrorMessage'), { variant: 'error' });
      } else {
        onError(t('schedule.missingUserIdErrorMessage'));
      }
      return;
    }

    if (!eventId) {
      if (!onError) {
        enqueueSnackbar(t('schedule.missingEventIdErrorMessage'), { variant: 'error' });
      } else {
        onError(t('schedule.missingEventIdErrorMessage'));
      }
      return;
    }

    try {
      await deleteEventById({ userId, id: eventId }).unwrap();
      enqueueSnackbar(t('schedule.deleteEventSuccessMessage'), { variant: 'success' });
      onSuccess?.();
    } catch (error) {
      if (!onError) {
        enqueueSnackbar(t('schedule.deleteEventErrorMessage'), { variant: 'error' });
      } else {
        onError(t('schedule.deleteEventErrorMessage'));
      }
    } finally {
      onFinally?.();
    }
  };
};
