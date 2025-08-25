import { useModalController } from '@utils/hooks/useModalController';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { modalNames } from '@utils/constants/modalNames';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useSelector } from 'react-redux';
import navigationLinks from '@router/links';
import { useDeleteInterviewMutation } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { selectModalData } from '@redux/slices/modal/modalSlice';
import { styles } from './ConfirmDeleteInterview.styles';

const ConfirmDeleteInterviewModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { eventId, oldEvent, nextEvent } = useSelector(selectModalData);
  const [cancelMeeting] = useDeleteInterviewMutation();
  const { closeModal } = useModalController();
  const handleCloseModal = () => closeModal(modalNames.confirmDeleteInterview);

  const handleDeleteInterview = () => {
    handleCloseModal();
    if (nextEvent) {
      navigate(`${navigationLinks.scheduledInterviews}/${nextEvent.id}`, {
        state: { event: nextEvent },
        replace: true,
      });
    } else {
      navigate(navigationLinks.scheduledInterviews);
    }

    cancelMeeting({ eventId })
      .unwrap()
      .then(() => {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.success'), {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      })
      .catch(() => {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
        navigate(`${navigationLinks.scheduledInterviews}/${eventId}`, {
          state: { event: oldEvent },
        });
      });
  };

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('modal.confirmDeleteInterview.title')}
      </Typography>
      <Typography sx={styles.text} variant='caption2'>
        {t('modal.confirmDeleteInterview.text')}
      </Typography>
      <Box sx={styles.box}>
        <ButtonDef
          label={t('modal.confirmDeleteInterview.refuseBtnText')}
          sx={styles.refuseBtn}
          type='button'
          variant='text'
          onClick={handleCloseModal}
        />
        <ButtonDef
          label={t('modal.confirmDeleteInterview.confirmBtnText')}
          sx={styles.confirmBtn}
          type='button'
          variant='contained'
          onClick={handleDeleteInterview}
        />
      </Box>
    </>
  );
};

export default ConfirmDeleteInterviewModal;
