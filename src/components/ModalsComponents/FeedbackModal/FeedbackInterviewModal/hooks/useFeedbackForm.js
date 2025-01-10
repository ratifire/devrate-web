import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/validationSchemas';
import { closeModal } from '../../../../../redux/modal/modalSlice.js';

const useFeedbackForm = () => {
  const dispatch = useDispatch();
  const { feedbackId } = useSelector((state) => state.feedback);
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { data } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });
  const [createInterview, { isError, isLoading }] = useCreateInterviewMutation();
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
      dispatch(closeModal());
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
    isLoading,
    name,
    surname,
    status,
    interviewStartTime,
  };
};

export default useFeedbackForm;
