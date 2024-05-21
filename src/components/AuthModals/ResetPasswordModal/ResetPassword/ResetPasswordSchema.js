import * as Yup from 'yup';

export const ResetPasswordSchema = Yup.object().shape({
  code: Yup.string()
    .required('Code is required')
    .min(6, 'Code must be at least 6 characters long'),
  repeatCode: Yup.string()
    .oneOf([Yup.ref('code'), null], 'Codes must match')
    .required('Please confirm your code'),
});
