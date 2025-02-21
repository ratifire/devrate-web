import { btnStatus } from './index';

const leftBtnStatus = {
  [btnStatus.UPCOMING]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.canceledMeeting',
  [btnStatus['IN PROCESS']]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.canceledMeeting',
  [btnStatus['AWAITING FEEDBACK']]: 'singleScheduledInterview.interviewsSummary.scheduledMeeting.notHappenedMeeting',
};

export default leftBtnStatus;
