import * as Yup from 'yup';

export const FeedbackModalSchema = Yup.object().shape({
  description: Yup.string().trim()
    .min(2, 'modal.interview.short')
    .max(170, 'modal.interview.long')
    .required('modal.interview.required'),
});
