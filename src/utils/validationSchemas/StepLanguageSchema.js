import * as Yup from 'yup';

export const StepLanguageSchema = Yup.object().shape({
  language: Yup.string().optional(),
});
