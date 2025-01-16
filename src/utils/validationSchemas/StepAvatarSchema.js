import * as Yup from 'yup';

export const StepAvatarSchema = Yup.object().shape({
  avatar: Yup.string().optional(),
});
