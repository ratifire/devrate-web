import * as Yup from 'yup';

export const ScheduleInterviewSchema = Yup.object().shape({
  specialization: Yup.number().required('interviews.scheduleInterviewModal.required'),
  language: Yup.string().required('interviews.scheduleInterviewModal.required'),
  interviewCount: Yup.number()
    .min(1, 'interviews.scheduleInterviewModal.interviewCount_min')
    .max(50, 'interviews.scheduleInterviewModal.interviewCount_max')
    .required('interviews.scheduleInterviewModal.required')
    .test(
      'is-less-than-pendingSlots',
      'interviews.scheduleInterviewModal.interviewCount_exceeds_pendingSlots',
      function (value) {
        const { pendingSlots, timeSlots } = this.parent;

        if (timeSlots.length !== 0) {
          return true;
        }

        if (pendingSlots === undefined || pendingSlots === null) {
          return true;
        }

        return value <= pendingSlots;
      }
    ),
  comment: Yup.string().max(300, 'interviews.scheduleInterviewModal.comment_max'),
});
