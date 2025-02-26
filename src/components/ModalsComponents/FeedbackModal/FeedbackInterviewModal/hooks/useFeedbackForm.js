import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '@redux/api/slices/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '@utils/validationSchemas';
import { closeModal, selectModalData } from '@redux/slices/modal/modalSlice.js';

const useFeedbackForm = () => {
  const dispatch = useDispatch();
  const { feedbackId } = useSelector(selectModalData);
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
      skills: values.skills.map(({ value, ...items }) => ({ mark: value, ...items })),
    };

    const result = await createInterview({ body });

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
