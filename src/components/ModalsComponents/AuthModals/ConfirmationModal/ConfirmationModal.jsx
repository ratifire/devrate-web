import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import ModalLayout from '../../../../layouts/ModalLayout';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../../redux/auth/authApiSlice';
import { ConfirmationSchema } from '../../../../utils/valadationSchemas/index';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord';
import ConfirmationForm from './ConfirmationForm';
import styles from './ConfirmationModal.styles';

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
        const response = await confirmEmail({
          confirmationCode: code,
          email,
        }).unwrap();
        resetForm();
        handleClose();
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
      <Typography sx={styles.title} variant='subtitle2'>
        {changeColorOfLastTitleWord(t('modal.confirmation.title'))}
      </Typography>

      <Box sx={styles.mainTextWrapper}>
        <Typography sx={styles.mainText} variant='subtitle3'>
          {t('modal.confirmation.main_text1')}{' '}
          <Typography component='span' sx={styles.userEmail} variant='subtitle3'>
            {email && email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, '*')}
            {'.'}
          </Typography>{' '}
          {t('modal.confirmation.main_text2')}
          {'.'}
        </Typography>
      </Box>

      <ConfirmationForm
        buttonLabel='modal.confirmation.btn_confirm'
        formik={formik}
        handleCodeChange={handleCodeChange}
        helperTextContent={codeError}
        inputRefs={inputRefs}
      />
    </ModalLayout>
  );
};

export default ConfirmationModal;
