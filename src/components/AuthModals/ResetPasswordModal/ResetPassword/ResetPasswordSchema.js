import * as Yup from 'yup';

export const ResetPasswordSchema = Yup.object().shape({
  code: Yup.array()
    .of(Yup.string().required('Code is required').length(1, 'Each code digit must be 1 character long'))
    .length(6, 'Code must be exactly 6 digits long'),
  newPassword: Yup.string()
    .required('New password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      'Password must include upper, lower, number, and special character'
    )
    .min(8, 'Password must be at least 8 characters long'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please confirm your new password'),
});
