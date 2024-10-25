import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

export const CheckResetEmailSchema = Yup.object().shape({
  email: emailValidationSchema,
  // email: Yup.string()
  //   .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'modal.registration.email_invalid')
  //   .email('modal.checkEmailResetPassword.email_invalid')
  //   .required('modal.checkEmailResetPassword.required')
  //   .test('custom-email', 'modal.checkEmailResetPassword.email_invalid', function (value) {
  //     if (!value) return false;
  //     if (value.length > 254) return false;
  //
  //     const [localPart, domainPart] = value.split('@');
  //     if (!localPart || !domainPart) return false;
  //     if (localPart.length > 64 || domainPart.length > 255) return false;
  //
  //     const domainParts = domainPart.split('.');
  //     if (domainParts.some((part) => part.length > 63)) return false;
  //
  //     const localPartRegex = /^[a-zA-Z0-9._%+-]+$/;
  //     if (!localPartRegex.test(localPart)) return false;
  //
  //     const domainPartRegex = /^[a-zA-Z0-9.-]+$/;
  //     if (!domainPartRegex.test(domainPart)) return false;
  //
  //     const domainPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  //     if (!domainPattern.test(domainPart)) return false;
  //
  //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return re.test(String(value).toLowerCase());
  //   }),
});
