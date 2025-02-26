import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/validationSchemas';
import { closeModal, selectModalData } from '../../../../../redux/modal/modalSlice.js';
import navigationLinks from '../../../../../router/links.js';

const useFeedbackForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      interviewId: feedbackId,
      feedback: values.comment,
      skills: values.skills.map(({ value, ...items }) => ({ mark: value, ...items })),
    };

    const result = await createInterview({ body });

    if (!result.error) {
      dispatch(closeModal());
      navigate(navigationLinks.interviews);
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
