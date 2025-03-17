import { btnStatus } from './index';

const leftBtnStatus = {
  [btnStatus.UPCOMING]: 'singleScheduledInterview.scheduledMeeting.canceledMeeting',
  [btnStatus['IN PROCESS']]: 'singleScheduledInterview.scheduledMeeting.canceledMeeting',
  [btnStatus['AWAITING FEEDBACK']]: 'singleScheduledInterview.scheduledMeeting.notHappenedMeeting',
};

export default leftBtnStatus;
