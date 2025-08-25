import { apiSlice } from '@redux/api/apiSlice.js';

const optimisticDeleteScheduledInterview = async ({ dispatch, eventId, queryFulfilled }) => {
  const patchResult = dispatch(
    apiSlice.util.updateQueryData('getAllScheduledInterviews', { size: 6 }, (draft) => {
      draft.content = draft.content.filter((item) => item.id !== eventId);
    })
  );
  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
};

export default optimisticDeleteScheduledInterview;
