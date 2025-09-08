import { useLazyGetInterviewMeetingUrlQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const useJoinInterview = () => {
  const [getMeetingUrl, { isLoading: isLoadingMeetingUrl }] = useLazyGetInterviewMeetingUrlQuery();
  const { t } = useTranslation();

  const joinInterview = async (interviewId, role) => {
    try {
      const meetingUrl = await getMeetingUrl(interviewId).unwrap();
      // Create URL with query params to use in mirotalk in a survey later
      const urlWithParams = new URL(meetingUrl);

      if (interviewId && role) {
        urlWithParams.searchParams.append('eventId', interviewId);
        urlWithParams.searchParams.append('role', role);
      }
      window.open(urlWithParams, '_blank');
    } catch (error) {
      if (error.status === 403) {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.403'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'error' });
      }
    }
  };
  return { joinInterview, isLoadingMeetingUrl };
};

export default useJoinInterview;
