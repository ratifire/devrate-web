import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ModalLayout from '../ModalLayout/ModalLayout';
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This is a required field'),
  country: Yup.string().min(6, 'Password too short').max(50, 'Password too long').required('This is a required field'),
  firstName: Yup.string()
    .min(2, 'FirstName too short')
    .max(50, 'FirstName too long')
    .required('This is a required field'),
  lastName: Yup.string().min(2, 'LastName too short').max(50, 'LastName too long').required('This is a required field'),
  password: Yup.string().min(6, 'Password too short').max(50, 'Password too long').required('This is a required field'),
  password2: Yup.string()
    .min(6, 'Password too short')
    .max(50, 'Password too long')
    .required('This is a required field'),
});

const initialValues = {
  email: '',
  country: '',
  firstName: '',
  lastName: '',
  password: '',
  password2: '',
  promo: false,
  agreement: false,
};

// eslint-disable-next-line react/prop-types
const RegistrationModal = ({ open, setOpen }) => {
  // const WithMaterialUI = () => {
  //   const formik = useFormik({
  //     initialValues: initialValues,
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });
  // };
  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={{ marginTop: 50, marginBottom: 30, color: '#F1F1F1', fontSize: 16 }}>Реєстрація</Typography>
      <Formik initialValues={initialValues} onSubmit={() => onSubmit()} validationSchema={ValidationSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <Form autoComplete='off' onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              fullWidth
              label='Електронна пошта'
              variant='outlined'
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24 }}
            />
            <div style={{ position: 'absolute' }}>{errors.email && touched.email && errors.email}</div>
            <FormControl fullWidth variant='outlined' sx={{ marginBottom: 24 }}>
              <InputLabel id='country-label'>Країна</InputLabel>
              <Select
                id='country'
                labelId='country-label'
                name='country'
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                label='Країна'
              >
                <MenuItem value={10}>Ukrain</MenuItem>
                <MenuItem value={20}>Poland</MenuItem>
                <MenuItem value={30}>USA</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: 24 }}>
              <TextField
                fullWidth
                label='Імʼя'
                variant='outlined'
                id='firstName'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginRight: 10 }}
              />
              <TextField
                fullWidth
                label='Прізвище'
                variant='outlined'
                id='lastName'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>
            <TextField
              type='password'
              fullWidth
              label='Пароль'
              variant='outlined'
              id='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24 }}
            />
            <TextField
              type='password'
              fullWidth
              label='Повторити пароль'
              variant='outlined'
              id='password'
              name='password'
              value={values.password2}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24 }}
            />
            <FormControlLabel
              control={<Checkbox checked={values.promo} onChange={handleChange} name='promo' />}
              label={
                <Typography color='#f1f1f1' fontWeight={300} fontSize={14} lineHeight={1.28}>
                  Надсилати мені новини, опитування та спіціальні пропозиції від DEVERATE
                </Typography>
              }
            />{' '}
            <FormControlLabel
              control={<Checkbox checked={values.promo} onChange={handleChange} name='promo' />}
              label={
                <Typography color='#f1f1f1' fontWeight={300} fontSize={14} lineHeight={1.28}>
                  Я прочитав (ла) та погоджуюсь з умовами користування
                </Typography>
              }
            />
            <Button
              onClick={() => handleReset()}
              sx={(theme) => ({
                margin: '0 auto',
                paddingX: 32,
                paddingY: 16,
                fontsize: 16,
                fontWeight: 500,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              })}
            >
              Попередній перегляд
            </Button>
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
};
export default RegistrationModal;
