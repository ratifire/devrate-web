import React, { useState } from 'react';
import { Form, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../RegistrationModal/RegistrationModal.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { RegistrationModalValidationSchema } from '../../../utils/validationSchemas/RegistraionModalValidationSchema';
import PropTypes from 'prop-types';

const initialValues = {
  email: '',
  country: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  news: false,
  agreement: false,
};

// eslint-disable-next-line react/prop-types
const RegistrationModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const ValidationSchema = RegistrationModalValidationSchema;

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('general.registration')}</Typography>
      <Form onSubmit={formik.handleSubmit} autoComplete='off' style={{ width: '100%' }}>
        <TextField
          fullWidth
          label={t('inputs.email')}
          variant='outlined'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ width: '100%', marginBottom: 24, borderColor: 'green' }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
        />
        <FormControl fullWidth variant='outlined' sx={{ marginBottom: 24 }}>
          <InputLabel id='country-label'>{t('country.country')}</InputLabel>
          <Select
            id='country'
            labelId='country-label'
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={t('inputs.country')}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            FormHelperTextProps={{
              sx: { position: 'absolute', bottom: '-20px' },
            }}
          >
            <MenuItem value={'ukraine'}>{t('countries.ukraine')}</MenuItem>
            <MenuItem value={'poland'}>{t('countries.poland')}</MenuItem>
            <MenuItem value={'usa'}>{t('countries.usa')}</MenuItem>
          </Select>
        </FormControl>
        <Box sx={styles.inputNameContainer}>
          <TextField
            fullWidth
            label={t('inputs.first_name')}
            variant='outlined'
            id='firstName'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ marginRight: 10 }}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            FormHelperTextProps={{
              sx: { position: 'absolute', bottom: '-20px' },
            }}
          />
          <TextField
            fullWidth
            label={t('inputs.last_name')}
            variant='outlined'
            id='lastName'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            FormHelperTextProps={{
              sx: { position: 'absolute', bottom: '-20px' },
            }}
          />
        </Box>
        <TextField
          type={showPassword ? 'text' : 'password'}
          fullWidth
          label={t('inputs.password')}
          variant='outlined'
          id='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ width: '100%', marginBottom: 24 }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
          InputProps={{
            endAdornment: (
              <>
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                    sx={{ marginRight: -12 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                <InputAdornment position='end'>
                  <Tooltip title={<Typography sx={styles.tooltip}>{t('inputs.password_tooltip')}</Typography>}>
                    <IconButton sx={{ marginRight: 0 }}>
                      <InfoOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              </>
            ),
          }}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          fullWidth
          label={t('inputs.password_repeat')}
          variant='outlined'
          id='repeatPassword'
          name='repeatPassword'
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ width: '100%', marginBottom: 24 }}
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
          InputProps={{
            endAdornment: (
              <>
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                    // sx={{ marginRight: 0 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.newsletter}
              onChange={formik.handleChange}
              name='promo'
              sx={{
                color: '#F1F1F1',
                '&.Mui-checked': {
                  color: '#F1F1F1',
                },
              }}
            />
          }
          label={<Typography sx={styles.newsAgreementText}>{t('modal.news_letter')}</Typography>}
          helperText={formik.touched.news && formik.errors.news}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.agreement}
              onChange={formik.handleChange}
              name='agreement'
              sx={{
                color: '#F1F1F1',
                '&.Mui-checked': {
                  color: '#F1F1F1',
                },
              }}
            />
          }
          label={<Typography sx={styles.newsAgreementText}>{t('modal.agreement')}</Typography>}
          sx={{ marginBottom: 24 }}
        />
        <Button
          disabled={(!formik.values.promo && true) || (!formik.values.agreement && true)}
          type='submit'
          sx={styles.btn}
        >
          {t('buttons.btn_register')}
        </Button>
        <Box sx={styles.policyTermsContainer}>
          <Link href='#' sx={styles.policyTermsLink}>
            {t('links.privacy_policy')}
          </Link>
          <Link href='#' sx={styles.policyTermsLink}>
            {t('links.terms_and_conditions')}
          </Link>
        </Box>
      </Form>
    </ModalLayout>
  );
};

RegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default RegistrationModal;
