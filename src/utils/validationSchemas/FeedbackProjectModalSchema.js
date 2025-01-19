import * as Yup from 'yup';

export const FeedbackProjectModalSchema = Yup.object({
  select: Yup.string().required('modal.feedbackProjectModal.required'),
  feedbackText: Yup.string()
    .min(2, 'modal.feedbackProjectModal.short')
    .max(300, 'modal.feedbackProjectModal.long')
    .required('modal.feedbackProjectModal.required'),
});
