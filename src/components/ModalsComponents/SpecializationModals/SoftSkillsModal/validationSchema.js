import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  selectedSkill: Yup.string()
    .min(2, 'Skill must be at least 2 characters')
    .max(20, 'Skill cannot be more than 20 characters')
    .required('Skill is required'),
});

export default validationSchema;