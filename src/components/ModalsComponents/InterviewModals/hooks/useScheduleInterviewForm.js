import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { enqueueSnackbar } from 'notistack';
import { useCreateInterviewRequestMutation } from '../../../../redux/interviews/interviewRequestsApiSlice.js';
import { ScheduleInterviewSchema } from '../../../../utils/validationSchemas';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { modalNames } from '../../../../utils/constants/modalNames.js';

const useScheduleInterviewForm = (mySpecialization) => {
  const { t } = useTranslation();
  const [createInterviewRequest] = useCreateInterviewRequestMutation();
  // const [updateInterviewRequest] = useUpdateInterviewRequestMutation();

  const { closeModal } = useModalController();
  const role = useSelector((state) => state.modal.data.role);

  //These two lines we need to preselect main mastery level in Step 1
  const mainSpecialization = mySpecialization?.find((item) => item.main === true);
  const masteryLevelId = mainSpecialization?.mainMasteryId;

  const initialValues = {
    role,
    specialization: masteryLevelId || '',
    language: 'ua',
    interviewCount: 1,
    comment: '',
    availableDates: [],
    assignedDates: [],
  };

  const onSubmit = async (values) => {
    const body = {
      role,
      masteryId: values.specialization,
      languageCode: values.language,
      comment: values.comment,
      desiredInterview: Number(values.interviewCount),
      availableDates: values.availableDates, //availableDates.length >= desiredInterview
      assignedDates: [], //always empty array on post request (create)
      expiredAt: values.availableDates.toSorted().at(-1),
    };

    try {
      await createInterviewRequest(body);
      enqueueSnackbar(t('modalNotifyText.interview.create.success'), { variant: 'success' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.interview.create.error'), { variant: 'error' });
    }

    closeModal(modalNames.scheduleInterviewModal);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ScheduleInterviewSchema,
    onSubmit,
  });

  return {
    formik,
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
