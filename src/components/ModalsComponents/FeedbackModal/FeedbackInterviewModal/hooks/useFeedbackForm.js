import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/validationSchemas';
import { closeModal, selectModalData } from '../../../../../redux/modal/modalSlice';
import navigationLinks from '../../../../../router/links';

const useFeedbackForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { feedbackId } = useSelector(selectModalData);
  const { data } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });
  const [createInterview, { isError, isLoading }] = useCreateInterviewMutation();
  const {
    interviewStartTime,
    participant: { name, surname, role, specializationName, masteryLevel },
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

    try {
      const result = await createInterview({ body });

      if (!result.error) {
        dispatch(closeModal());
        navigate(navigationLinks.interviews);
        enqueueSnackbar(t('modal.feedbackProjectModal.success'), { variant: 'success' });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modal.feedbackProjectModal.error_429'), { variant: 'error' });
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
    interviewStartTime,
    role,
    specializationName,
    masteryLevel,
  };
};

export default useFeedbackForm;
