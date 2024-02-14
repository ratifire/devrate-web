import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../ModalLayout/ModalLayout';
import styles from './CheckEmailResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Typography, Link, FormControl, InputLabel, OutlinedInput, FormHelperText, Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
  });
  const Submit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: Submit,
  });

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.send_letter_title')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={Submit} validationSchema={validationSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form autoComplete='off' onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FormControl variant='outlined' sx={styles.input} error={touched.email && Boolean(errors.email)}>
              <InputLabel htmlFor='outlined-adornment-email'>{t('modal.email')}</InputLabel>
              <OutlinedInput
                id='email'
                name='email'
                type='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label={t('modal.email')}
              />
              <FormHelperText id='component-error-text' sx={styles.textHelper}>
                {touched.email && errors.email}
              </FormHelperText>
            </FormControl>
            <Button onClick={handleSubmit} sx={styles.btn} disabled={touched.email && errors.email}>
              {t('modal.send_letter')}
            </Button>
          </Form>
        )}
      </Formik>
      <Box sx={styles.box}>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('modal.privacy_policy')}
        </Link>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('modal.terms_and_conditions')}
        </Link>
      </Box>
      <Typography sx={styles.textLink}>
        {t('modal.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('modal.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};
export default ResetPasswordModal;
