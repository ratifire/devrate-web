import { z } from 'zod';

export const FeedbackProjectModalSchema = z.object({
  select: z.string().min(1, 'modal.feedbackProjectModal.required'),
  feedbackText: z
    .string({
      required_error: 'modal.feedbackProjectModal.required',
    })
    .min(2, {
      message: 'modal.feedbackProjectModal.short',
    })
    .max(300, {
      message: 'modal.feedbackProjectModal.long',
    }),
});
