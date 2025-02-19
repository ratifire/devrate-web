import { btnStatus } from './index';

const rightBtnStatus = {
  [btnStatus.UPCOMING]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.joinMeeting',
  [btnStatus['IN PROCESS']]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.joinMeeting',
  [btnStatus['AWAITING FEEDBACK']]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.leaveFeedbackMeeting',
};

export default rightBtnStatus;
