import * as Yup from 'yup';

export const SkillsItemSchema = Yup.object().shape({
  hidden: Yup.boolean(),
});
