import * as Yup from 'yup';

export const ResetPasswordSchema = Yup.object().shape({
  text0: Yup.string().required('Code is required'),
  text1: Yup.string().required('Code is required'),
  text2: Yup.string().required('Code is required'),
  text3: Yup.string().required('Code is required'),
  text4: Yup.string().required('Code is required'),
  text5: Yup.string().required('Code is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long'),
  repeatCode: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please confirm your new password'),
});
