import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayout from '../../../../layouts/ModalLayout';
import { Box, Typography } from '@mui/material';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../../redux/auth/authApiSlice';
import { useFormik } from 'formik';
import ConfirmationForm from './ConfirmationForm';
import { ConfirmationSchema } from '../../../../utils/valadationSchemas/index';
import styles from './ConfirmationModal.styles';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord';

const ConfirmationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [codeError, setCodeError] = useState(false);
  const [confirmEmail] = useConfirmEmailMutation();
  const openConfirmation = useSelector((state) => state.modal.openConfirmation);
  const email = useSelector((state) => state.modal.modalData);
  const handleClose = () => {
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

  const formik = useFormik({
    initialValues: {
      text0: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
    },
    validationSchema: ConfirmationSchema,
    onSubmit: async (values, { resetForm }) => {
      const code = Object.values(values).join('');

      try {
        const response = await confirmEmail(code).unwrap();
        resetForm();
        handleClose();
        // dispatch(closeModal({ modalName: 'openConfirmation' }));
        if (response) {
          setTimeout(() => {
            dispatch(openModal({ modalName: 'openLogin' }));
          }, 500);
        }
      } catch (error) {
        setCodeError(true);
      }

      inputRefs.current.forEach((ref) => {
        if (ref) ref.value = '';
      });
    },
  });

  const handleCodeChange = (code) => {
    for (let i = 0; i < 6; i++) {
      formik.setFieldValue(`text${i}`, code[i] || '');
    }
  };

  return (
    <ModalLayout open={openConfirmation} setOpen={handleClose}>
      <Typography variant='subtitle2' sx={styles.title}>
        {changeColorOfLastTitleWord(t('modal.confirmation.title'))}
      </Typography>

      <Box sx={styles.mainTextWrapper}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text1')}{' '}
          <Typography variant='subtitle3' component='span' sx={styles.userEmail}>
            {email && email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, '*')}
            {'.'}
          </Typography>{' '}
          {t('modal.confirmation.main_text2')}
          {'.'}
        </Typography>
      </Box>

      <ConfirmationForm
        formik={formik}
        inputRefs={inputRefs}
        helperTextContent={codeError}
        buttonLabel='modal.confirmation.btn_confirm'
        handleCodeChange={handleCodeChange}
      />
    </ModalLayout>
  );
};

export default ConfirmationModal;
