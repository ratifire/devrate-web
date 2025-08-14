import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { enqueueSnackbar } from 'notistack';
import {
  useAddTimeSlotsMutation,
  useCreateInterviewRequestMutation,
  useUpdateInterviewRequestMutation,
} from '@redux/api/slices/interviews/interviewRequestsApiSlice';
import { ScheduleInterviewSchema } from '@utils/validationSchemas';
import { useModalController } from '@utils/hooks/useModalController';
import { modalNames } from '@utils/constants/modalNames';
import interviewModalRole from '@utils/constants/InterviewModalRole';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice';

const useScheduleInterviewForm = () => {
  const { t } = useTranslation();
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const [createInterviewRequest] = useCreateInterviewRequestMutation();
  const [updateInterviewRequest] = useUpdateInterviewRequestMutation();
  const [addTimeSlots] = useAddTimeSlotsMutation();
  const {
    data: allSpecializations,
    isFetching,
    isError,
  } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });

  const { closeModal } = useModalController();
  const role = useSelector((state) => state.modal.data.role);
  const selectedSpecialization = useSelector((state) => state.modal.data?.selectedSpecialization);
  const interviewRequestId = useSelector((state) => state.modal.data?.interviewRequestId);
  const totalInterviews = useSelector((state) => state.modal.data?.totalInterviews);
  const comment = useSelector((state) => state.modal.data?.comment);
  const modalRole = useSelector((state) => state.modal.data?.modalRole);
  const language = useSelector((state) => state.modal.data?.language);
  const pendingSlots = useSelector((state) => state.modal.data?.pendingSlots);

  //These two lines we need to preselect main mastery level in Step 1
  const mainSpecialization = allSpecializations?.find((item) => item.main === true);
  const mainMasteryLevelId = mainSpecialization?.mainMasteryId;

  const initialValues = {
    role,
    specialization: selectedSpecialization?.mainMasteryId || mainMasteryLevelId || '',
    language: language || 'ua',
    interviewCount: +totalInterviews || 1,
    comment: comment || '',
    timeSlots: [],
    addedTimeSlots: [],
    pendingSlots: pendingSlots || '',
    consentStatus: false,
  };

  const onSubmit = async (values) => {
    let body;

    if (modalRole === interviewModalRole.EditFeature) {
      body = {
        role,
        masteryId: values.specialization,
        comment: values.comment,
        languageCode: values.language,
        expiredAt: values.timeSlots.toSorted().at(-1),
        desiredInterview: Number(values.interviewCount),
      };
    } else if (modalRole === interviewModalRole.AddTimeSlots) {
      body = values.addedTimeSlots;
    } else {
      body = {
        role,
        masteryId: values.specialization,
        comment: values.comment,
        languageCode: values.language,
        expiredAt: values.timeSlots.toSorted().at(-1),
        desiredInterview: Number(values.interviewCount),
        timeSlots: values.addedTimeSlots,
        consentStatus: values.consentStatus,
      };
    }

    try {
      if (selectedSpecialization) {
        if (modalRole === interviewModalRole.EditFeature) {
          await updateInterviewRequest({ id: interviewRequestId, body });
        } else if (modalRole === interviewModalRole.AddTimeSlots) {
          await addTimeSlots({ id: interviewRequestId, body });
        }
        enqueueSnackbar(t('modalNotifyText.interview.edit.success'), {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      } else {
        await createInterviewRequest(body).unwrap();
        enqueueSnackbar(t('modalNotifyText.interview.create.success'), { variant: 'success' });
      }
    } catch (error) {
      if (error.status === 422) {
        enqueueSnackbar(t('modalNotifyText.interview.create.skillsValidation'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('modalNotifyText.interview.create.error'), { variant: 'error' });
      }
    } finally {
      closeModal(modalNames.scheduleInterviewModal);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ScheduleInterviewSchema,
    onSubmit,
    validateOnMount: true,
  });

  return {
    formik,
    isFetching,
    isError,
    selectedSpecialization,
    spec: selectedSpecialization ? [selectedSpecialization] : allSpecializations,
  };
};

useScheduleInterviewForm.propTypes = {
  mySpecialization: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      mainMasteryLevel: PropTypes.string.isRequired,
      mainMasteryId: PropTypes.number.isRequired,
      main: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default useScheduleInterviewForm;
