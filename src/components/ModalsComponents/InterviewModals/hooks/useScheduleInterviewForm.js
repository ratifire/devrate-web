import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { enqueueSnackbar } from 'notistack';
import {
  useCreateInterviewRequestMutation,
  useUpdateInterviewRequestMutation,
} from '../../../../redux/interviews/interviewRequestsApiSlice';
import { ScheduleInterviewSchema } from '../../../../utils/validationSchemas';
import { useModalController } from '../../../../utils/hooks/useModalController';
import { modalNames } from '../../../../utils/constants/modalNames';

const useScheduleInterviewForm = (mySpecialization) => {
  const { t } = useTranslation();
  const [createInterviewRequest] = useCreateInterviewRequestMutation();
  const [updateInterviewRequest] = useUpdateInterviewRequestMutation();

  const { closeModal } = useModalController();
  const role = useSelector((state) => state.modal.data.role);
  const selectedSpecialization = useSelector((state) => state.modal.data?.selectedSpecialization);
  const interviewRequestId = useSelector((state) => state.modal.data?.interviewRequestId);
  const totalInterviews = useSelector((state) => state.modal.data?.totalInterviews);

  //These two lines we need to preselect main mastery level in Step 1
  const mainSpecialization = mySpecialization?.find((item) => item.main === true);
  const masteryLevelId = mainSpecialization?.mainMasteryId;

  const initialValues = {
    role,
    specialization: masteryLevelId || '',
    language: 'ua',
    interviewCount: totalInterviews || 1,
    comment: '',
    timeSlots: [],
  };

  const onSubmit = async (values) => {
    const body = {
      role,
      masteryId: values.specialization,
      languageCode: values.language,
      comment: values.comment,
      desiredInterview: Number(values.interviewCount),
      timeSlots: values.timeSlots,
      expiredAt: values.timeSlots.toSorted().at(-1),
    };

    try {
      if (selectedSpecialization) {
        await updateInterviewRequest({ id: interviewRequestId, body });
        enqueueSnackbar(t('modalNotifyText.interview.edit.success'), {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      } else {
        await createInterviewRequest(body);
        enqueueSnackbar(t('modalNotifyText.interview.create.success'), { variant: 'success' });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.interview.create.error'), { variant: 'error' });
    } finally {
      closeModal(modalNames.scheduleInterviewModal);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ScheduleInterviewSchema,
    onSubmit,
  });

  return {
    formik,
    selectedSpecialization,
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
