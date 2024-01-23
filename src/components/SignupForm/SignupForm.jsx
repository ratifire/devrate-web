import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { selectUser } from '../../redux/auth/selectors';
import styles from './style.module.css';
import { useCreateUserMutation } from '../../redux/services/authAPI';
import { selectCurrentUser, setCredentials } from '../../redux/auth/slice';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [createUser, { isLoading: isCreating }] = useCreateUserMutation();
  const { t, i18n } = useTranslation();
  const xxx = useSelector(selectCurrentUser);
  // console.log(selectCurrentUser);
  const locales = {
    en: { title: 'English' },
    uk: { title: 'Українська' },
  };

  const registerUserHandler = async (userData) => {
    try {
      const requestData = await createUser(userData).unwrap();
      console.log(requestData);
      dispatch(setCredentials(requestData));
    } catch (error) {
      console.log(error.data.message);
      if (error.data.message === 'User with this email already exists') {
        toast.warning('User with this email already exists', {
          position: 'top-right',
          theme: 'colored',
          pauseOnHover: true,
        });
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      //   firstName: Yup.string()
      //     .max(15, t('main.must_characters_15'))
      //     .required(t('main.required')),
      //   lastName: Yup.string()
      //     .max(20, t('main.must_characters_20'))
      //     .required(t('main.required')),
      name: Yup.string().max(15, t('main.must_characters_15')).required(t('main.required')),
      email: Yup.string().email(t('main.invalid_mail_address')).required(t('main.required')),
      password: Yup.string()
        .min(6, 'Password too short')
        .max(50, 'Password too long')
        .required('This is a required field'),
    }),
    onSubmit: (values) => {
      //   registerUserHandler({
      //     name: 'name',
      //     email: 'email@mail.com',
      //     password: '123456',
      //   });

      registerUserHandler(values);
      //   alert(JSON.stringify(values, null, 2));
    },
  });
  return isCreating ? (
    <CircularProgress color='secondary' />
  ) : (
    <div className={styles.form}>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              style={{
                fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal',
              }}
              type='submit'
              onClick={() => i18n.changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        {/* <div className={styles.form_inputWrap}>
          <label htmlFor="firstName">{t('main.first_name')}</label>
          <input
            className={styles.form_input}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.form_error}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={styles.form_inputWrap}>
          <label htmlFor="lastName">{t('main.last_name')}</label>
          <input
            className={styles.form_input}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={styles.form_error}>{formik.errors.lastName}</div>
          ) : null}
        </div> */}
        <div className={styles.form_inputWrap}>
          <label htmlFor='name'>{t('main.name')}</label>
          <input
            className={styles.form_input}
            id='name'
            name='name'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.form_error}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={styles.form_inputWrap}>
          <label htmlFor='email'>{t('main.email_address')}</label>
          <input
            className={styles.form_input}
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.form_error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.form_inputWrap}>
          <label htmlFor='password'>{t('main.password')}</label>
          <input
            className={styles.form_input}
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.form_error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type='submit'>{t('main.submit')}</button>
      </form>
    </div>
  );
};

export default SignupForm;
