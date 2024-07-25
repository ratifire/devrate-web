import * as Yup from 'yup';

export const AchievementModalSchema = Yup.object().shape({
  link: Yup.string()
    .min(10, 'modal.achievement.link_short')
    .max(200, 'modal.achievement.link_long')
    .url('Invalid URL format')
    .required('modal.achievement.required'),
  summary: Yup.string().trim()
    .min(2, 'modal.achievement.summary_short')
    .max(100, 'modal.achievement.summary_long')
    .required('modal.achievement.required'),
  description: Yup.string().trim()
    .min(2, 'modal.achievement.description_short')
    .max(500, 'modal.achievement.description_long')
    .required('modal.achievement.required'),
});
