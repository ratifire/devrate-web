import * as Yup from 'yup';

const urlRegex = /^(https:\/\/|www\.)/;

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string()
    .url('please type coorect Telegram') 
    .optional(),
  linkedIn: Yup.string()
    .matches(urlRegex, 'please type coorect URL') 
    .matches(/linkedin/, 'please type coorect URL') 
    .optional(),
  gitHub: Yup.string()
    .matches(urlRegex, 'please type coorect URL') 
    .matches(/github/, 'please type coorect URL')
    .optional(),
  behance: Yup.string()
    .matches(urlRegex, 'please type coorect URL') 
    .matches(/behance/, 'please type coorect URL') 
    .optional(),
  mail: Yup.string()
    .email('please type coorect Email') 
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, ' please type coorect Phone number') 
    .optional(),
});
