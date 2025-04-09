import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useDeleteEventByIdMutation } from '@redux/api/slices/schedule/scheduleApiSlice';

const useDeleteEvent = () => {
  const [deleteEventById] = useDeleteEventByIdMutation();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return async ({ eventId, onSuccess }) => {
    try {
      await deleteEventById({ id: eventId }).unwrap();
      enqueueSnackbar(t('schedule.deleteEventSuccessMessage'), { variant: 'success' });
      onSuccess?.();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('schedule.deleteEventErrorMessage'), { variant: 'error' });
    }
  };
};

export default useDeleteEvent;
