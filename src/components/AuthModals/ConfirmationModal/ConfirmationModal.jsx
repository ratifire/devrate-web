import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, FormHelperText, Typography, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { ButtonDef } from '../../Buttons';
import { ConfirmationSchema } from './ConfirmationSchema';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../redux/auth/authApiSlice';

const initialValues = {
  text0: '',
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: '',
};

const ConfirmationModal = () => {
  const { t } = useTranslation();
  const [codeError, setCodeError] = useState(false);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [confirmEmail] = useConfirmEmailMutation();
  const openConfirmation = useSelector((state) => state.modal.openConfirmation);
  const handleClose = () => dispatch(closeModal({ modalName: 'openConfirmation' }));
  const handleCloseAllModal = () => {
    dispatch(closeModal({ modalName: 'openRegistration' }));
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

  const onSubmit = async (values, { resetForm }) => {
    const code = Object.values(values).join('');

    try {
      const { data } = await confirmEmail(code);
      if (data) {
        dispatch(closeModal({ modalName: 'openConfirmation' }));
        dispatch(openModal({ modalName: 'openLogin' }));
      }
    } catch (error) {
      if (error.originalStatus === 410) {
        setCodeError(true);
      }
    }

    resetForm();

    inputRefs.current.forEach((ref) => {
      ref.value = '';
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ConfirmationSchema,
    onSubmit,
  });

  const handleKeyDown = (event, index) => {
    const { key } = event;
  
    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;
  
      // Проверяем, есть ли уже символ в поле ввода
      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValue = value + key;
          formik.setFieldValue(`text${index}`, newValue);
  
          // Переходим к следующему полю, если оно существует и не заполнено
          if (index < 5 && !formik.values[`text${index + 1}`]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace' && index > 0) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index - 1].focus();
        } else if (key === 'Delete' && index < 5) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index + 1].focus();
        }
      } else {
        event.preventDefault(); // Предотвращаем вставку символа, если поле ввода уже заполнено
      }
    } else {
      event.preventDefault(); // Предотвращаем стандартное поведение для всех остальных клавиш
    }
  };

  const isButtonActive = Object.values(formik.values).every((val) => val !== '');

  const helperTextContent = Object.keys(formik.errors).some((key) => formik.touched[key]) ? 'Error Message' : null;

  return (
    <ModalLayout open={openConfirmation} setOpen={handleClose}>
      <Typography>{t('modal.confirmation.title')}</Typography>
      {codeError && (
        <Box>
          <CancelIcon />
          <Typography>{t('modal.confirmation.code_error_text')}</Typography>
        </Box>
      )}

      <Box>
        <Typography>
          {t('modal.confirmation.main_text1')} <Typography component='span'>user@mail.com</Typography>.
        </Typography>
        <Typography>{t('modal.confirmation.main_text2')}</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {[...Array(6)].map((_, index) => (
            <React.Fragment key={index}>
              <TextField
                type="text"
                variant="outlined"
                inputRef={(ele) => {
                  inputRefs.current[index] = ele;
                }}
                onKeyDown={(event) => handleKeyDown(event, index)}
                value={formik.values[`text${index}`] ?? ''}
                inputProps={{ style: { textAlign: 'center' }, maxLength: 1 }}
              />
            </React.Fragment>
          ))}
        </Box>

        <FormHelperText>{helperTextContent}</FormHelperText>

        <Box>
          <ButtonDef
            variant='contained'
            onClick={formik.handleSubmit}
            label='modal.confirmation.btn_confirm'
            disabled={!isButtonActive}
          />
        </Box>
        <Box>
          <Typography>{t('modal.confirmation.spam_check_text')}</Typography>
          <Typography>
            <RouterLink to={'/'} onClick={handleCloseAllModal}>{t('modal.confirmation.repeat_request_link')}</RouterLink>
            <Typography>{t('modal.confirmation.repeat_request_text1')}</Typography>
          </Typography>
          <Typography>
            <Typography>{t('modal.confirmation.repeat_request_text2')}</Typography>
            <RouterLink to={'/'} onClick={handleCloseAllModal}>{t('modal.confirmation.change_email_link')}</RouterLink>
          </Typography>
        </Box>
        <Box>
          <Typography>{t('modal.confirmation.return_on')}</Typography>
          <RouterLink to={'/'} onClick={handleCloseAllModal}>{t('modal.confirmation.home_page')}</RouterLink>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default ConfirmationModal;
