import * as Yup from 'yup';

export const AchievementModalSchema = Yup.object().shape({
  summary: Yup.string().trim()
    .min(2, 'modal.achievement.summary_short')
    .max(75, 'modal.achievement.summary_long')
    .required('modal.achievement.required'),
  link: Yup.string()
    .min(10, 'modal.achievement.link_short')
    .max(1000, 'modal.achievement.link_long')
    .url('Invalid URL format')
    .required('modal.achievement.required'),
  description: Yup.string().trim()
    .min(2, 'modal.achievement.description_short')
    .max(170, 'modal.achievement.description_long')
    .required('modal.achievement.required'),
});
