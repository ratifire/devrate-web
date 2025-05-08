import { Button } from '@mui/material';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';

const SettingsGeneral = () => {
  const { openModal } = useModalController();

  const handleOpenModal = () => {
    openModal(modalNames.activationModal);
  };

  const handleOpenConfirmModal = () => {
    openModal(modalNames.confirmationModal);
  };

  return (
    <>
      <h1>SettingsGeneral</h1>
      <Button onClick={handleOpenModal}>Modal</Button>
      <Button onClick={handleOpenConfirmModal}>Confirm modal</Button>
    </>
  );
};

export default SettingsGeneral;
