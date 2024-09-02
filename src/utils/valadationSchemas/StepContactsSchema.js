import * as Yup from 'yup'

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string()
  .matches(/^(https?:\/\/t\.me\/|@|b\d{5})/, 'please type correct URL, username')
  .optional(),
  linkedIn: Yup.string()
    .matches(/linkedin/, 'please type correct URL')
    .optional(),
  gitHub: Yup.string()
    .matches(/github/, 'please type correct URL')
    .optional(),
  behance: Yup.string()
    .matches(/behance/, 'please type correct URL')
    .optional(),
  mail: Yup.string()
    .email('please type correct Email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'please type correct Phone number')
    .optional(),
});
