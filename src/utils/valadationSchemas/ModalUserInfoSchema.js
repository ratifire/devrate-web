import * as Yup from 'yup';

export const ModalUserInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.first_name_short')
    .max(50, 'profile.modal.userInfo.personal.first_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.first_name_invalid_characters',
    )
    .required('profile.modal.userInfo.personal.required'),
  lastName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(50, 'profile.modal.userInfo.personal.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.last_name_invalid_characters',
    )
    .required('profile.modal.userInfo.personal.required'),
  city: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(100, 'profile.modal.userInfo.personal.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.city_invalid_characters',
    ),
  country: Yup.string().required('profile.modal.userInfo.personal.required'),
  status: Yup.string().optional(),
  aboutMe: Yup.string().optional(),
  telegram: Yup.string().optional(),
  linkedIn: Yup.string().optional(),
  gitHub: Yup.string().optional(),
  behance: Yup.string().optional(),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'modal.registration.email_invalid')
    .email('modal.registration.email_invalid')
    .required('profile.modal.userInfo.personal.required')
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
  phone: Yup.string().optional(),
});
