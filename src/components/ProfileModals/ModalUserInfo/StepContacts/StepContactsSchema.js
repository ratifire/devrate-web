import * as Yup from 'yup';

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string().optional(),
  linkedIn: Yup.string().optional(),
  gitHub: Yup.string().optional(),
  behance: Yup.string().optional(),
  mail: Yup.string().required('profile.modal.userInfo.personal.required'),
  phone: Yup.string().optional(),
});
