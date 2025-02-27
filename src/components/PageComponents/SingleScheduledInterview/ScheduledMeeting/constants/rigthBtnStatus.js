import { btnStatus } from './index';

const rightBtnStatus = {
  [btnStatus.UPCOMING]: 'singleScheduledInterview.scheduledMeeting.joinMeeting',
  [btnStatus['IN PROCESS']]: 'singleScheduledInterview.scheduledMeeting.joinMeeting',
  [btnStatus['AWAITING FEEDBACK']]: 'singleScheduledInterview.scheduledMeeting.leaveFeedbackMeeting',
};

export default rightBtnStatus;
