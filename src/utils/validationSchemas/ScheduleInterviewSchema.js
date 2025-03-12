import * as Yup from 'yup';

export const ScheduleInterviewSchema = Yup.object().shape({
  specialization: Yup.number().required('interviews.scheduleInterviewModal.required'),
  language: Yup.string().required('interviews.scheduleInterviewModal.required'),
  interviewCount: Yup.number()
    .min(1, 'interviews.scheduleInterviewModal.interviewCount_min')
    .max(50, 'interviews.scheduleInterviewModal.interviewCount_max')
    .required('interviews.scheduleInterviewModal.required'),
  comment: Yup.string().max(300, 'interviews.scheduleInterviewModal.comment_max'),
});
