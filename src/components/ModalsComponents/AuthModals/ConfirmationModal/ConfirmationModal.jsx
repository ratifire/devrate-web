import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice';
import { useConfirmEmailMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { ConfirmationSchema } from '../../../../utils/validationSchemas';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import ConfirmationForm from './ConfirmationForm';
import styles from './ConfirmationModal.styles';

const ConfirmationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [codeError, setCodeError] = useState(false);
  const [confirmEmail] = useConfirmEmailMutation();
  const email = useSelector((state) => state.modal.data);

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
        await confirmEmail({
          confirmationCode: code,
          email,
        }).unwrap();
        resetForm();
        dispatch(closeModal());
        dispatch(openModal({ modalType: modalNames.loginModal }));
        // eslint-disable-next-line no-unused-vars
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
    <>
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
        buttonLabel={t('modal.confirmation.btn_confirm')}
        formik={formik}
        handleCodeChange={handleCodeChange}
        handleSubmit={formik.handleSubmit}
        helperTextContent={codeError}
        inputRefs={inputRefs}
      />
    </>
  );
};

export default ConfirmationModal;
