import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import styles from './CheckEmailResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { Form, Formik, useFormik } from 'formik';

import { Box, Button, FormControl, FormHelperText, InputLabel, Link, OutlinedInput, Typography } from '@mui/material';
import { CheckEmailResetPasswordModalValidationSchema } from '../../../utils/validationSchemas/CheckEmailResetPasswordModalValidationSchema'; // eslint-disable-next-line react/prop-types
import PropTypes from 'prop-types';

const initialValues = {
  email: '',
};
// eslint-disable-next-line react/prop-types
const ResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const Submit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: CheckEmailResetPasswordModalValidationSchema,
    onSubmit: Submit,
  });

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.send_letter_title')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
        <Form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <FormControl
            variant='outlined'
            sx={styles.input}
            error={formik.touched.email && Boolean(formik.errors.email)}
          >
            <InputLabel htmlFor='outlined-adornment-email'>{t('inputs.email')}</InputLabel>
            <OutlinedInput
              id='email'
              name='email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={t('inputs.email')}
            />
            <FormHelperText id='component-error-text' sx={styles.textHelper}>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </FormControl>
          <Button onClick={formik.handleSubmit} sx={styles.btn} disabled={formik.touched.email && formik.errors.email}>
            {t('buttons.btn_send_letter')}
          </Button>
        </Form>
      </Formik>
      <Box sx={styles.box}>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.privacy_policy')}
        </Link>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.terms_and_conditions')}
        </Link>
      </Box>
      <Typography sx={styles.textLink}>
        {t('modal.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

ResetPasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ResetPasswordModal;
