import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import ModalLayout from '../../../../../layouts/ModalLayout';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { closeModal, openModal } from '../../../../../redux/modal/modalSlice';
import changeColorOfLastTitleWord from '../../../../../utils/helpers/changeColorOfLastTitleWord.jsx';
import styles from './NotificationModal.styles';

const NotificationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openNotification = useSelector((state) => state.modal.openNotification);

  const handleClose = () => dispatch(closeModal({ modalName: 'openNotification' }));

  const handleEnter = () => {
    dispatch(closeModal({ modalName: 'openNotification' }));
    dispatch(openModal({ modalName: 'openLogin' }));
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
          correctStyle={styles.submitBtn}
          handlerClick={handleEnter}
          label='modal.notificationModal.btn_enter'
          type='button'
          variant='contained'
        />
      </Box>
    </ModalLayout>
  );
};

export default NotificationModal;
