import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'modal.registration.email_invalid')
    .email('modal.registration.email_invalid')
    .required('modal.registration.required')
    .test('custom-email', 'modal.registration.email_invalid', function(value) {
      if ( !value) return false;
      if (value.length > 254) return false;
      
      const [localPart, domainPart] = value.split('@');
      if ( !localPart || !domainPart) return false;
      if (localPart.length > 64 || domainPart.length > 255) return false;
      
      const domainParts = domainPart.split('.');
      if (domainParts.some(part => part.length > 63)) return false;
      
      const localPartRegex = /^[a-zA-Z0-9._%+-]+$/;
      if ( !localPartRegex.test(localPart)) return false;
      
      const domainPartRegex = /^[a-zA-Z0-9.-]+$/;
      if ( !domainPartRegex.test(domainPart)) return false;
      
      const domainPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      if ( !domainPattern.test(domainPart)) return false;
      
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(value).toLowerCase());
    }),
  country: Yup.string().required('modal.registration.required'),
  firstName: Yup.string()
    .min(2, 'modal.registration.first_name_short')
    .max(50, 'modal.registration.first_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'modal.registration.first_name_invalid_characters',
    )
    .required('modal.registration.required'),
  lastName: Yup.string()
    .min(2, 'modal.registration.last_name_short')
    .max(50, 'modal.registration.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'modal.registration.last_name_invalid_characters',
    )
    .required('modal.registration.required'),
  password: Yup.string()
    .min(8, 'modal.registration.password_short')
    .max(50, 'modal.registration.password_long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/,
      'modal.registration.password_invalid',
    )
    .required('modal.registration.required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'modal.registration.password_must_match')
    .required('modal.registration.required'),
  agreement: Yup.boolean()
    .oneOf([true], 'modal.registration.agreement_error')
    .required('modal.registration.agreement_error'),
});
