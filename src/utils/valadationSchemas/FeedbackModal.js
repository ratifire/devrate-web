import * as Yup from 'yup';

export const FeedbackModal = Yup.object({
  select: Yup.string()
    .required('Выберите значение из списка'),
  feedbackText: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(300, 'Максимум 150 символов')
    .required('Введите сообщение'),
});