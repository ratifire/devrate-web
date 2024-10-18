import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { closeFeedbackModal } from '../../../../redux/feedback/feedbackModalSlice';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../utils/valadationSchemas';

const useFormikInit = () => {
  const dispatch = useDispatch();
  const { feedbackId } = useSelector((state) => state.feedback);
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { data } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });
  const [createInterview, { isError }] = useCreateInterviewMutation();
  const {
    interviewStartTime,
    participant: { name, status, surname },
    skills,
  } = data;

  const initialValues = {
    comment: '',
    skills: skills.map(({ id, name, type }) => ({ id, name, type, value: 1 })),
  };

  const onSubmit = async (values) => {
    const body = {
      interviewFeedbackDetailId: feedbackId,
      comment: values.comment,
      skills: values.skills.map(({ id, value }) => ({ id, mark: value })),
    };

    const result = await createInterview({ reviewerId: userId, body });

    if (!result.error) {
      dispatch(closeFeedbackModal());
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackModalSchema,
    onSubmit,
  });

  return {
    formik,
    isError,
    name,
    surname,
    status,
    interviewStartTime,
  };
};

export default useFormikInit;
