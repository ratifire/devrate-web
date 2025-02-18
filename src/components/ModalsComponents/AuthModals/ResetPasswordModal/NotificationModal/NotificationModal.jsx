import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice';
import ModalLayout from '../../../../../layouts/ModalLayout';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import changeColorOfLastTitleWord from '../../../../../utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '../../../../../utils/constants/modalNames.js';
import styles from './NotificationModal.styles';

const NotificationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openNotification = useSelector((state) => state.modal.openNotification);

  const handleClose = () => dispatch(closeModal());

  const handleEnter = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalType: modalNames.loginModal }));
  };

  return (
    <ModalLayout open={openNotification} setOpen={handleClose}>
      <Typography sx={styles.title} variant='subtitle3'>
        {changeColorOfLastTitleWord(t('modal.notificationModal.title'))}
      </Typography>
      <Typography sx={styles.message} variant='subtitle3'>
        {t('modal.notificationModal.message')}
      </Typography>
      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          label={t('modal.notificationModal.btn_enter')}
          sx={styles.submitBtn}
          type='button'
          variant='contained'
          onClick={handleEnter}
        />
      </Box>
    </ModalLayout>
  );
};

export default NotificationModal;
