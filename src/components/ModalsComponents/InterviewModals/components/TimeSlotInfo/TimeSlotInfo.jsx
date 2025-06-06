import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useGetDefLanguageQuery } from '@redux/api/slices/defaultLanguage/defaultLanguageApiSlice.js';
import { FormCheckbox } from '@components/FormsComponents/Inputs/index.js';
import InfoTooltip from '@components/UI/InfoTooltip/index.js';
import FormInput from '../../../../FormsComponents/Inputs/FormInput';
import SpecialisationLevelCombinedSelect from '../../../../FormsComponents/Inputs/SpecialisationLevelCombinedSelect/index.js';
import SelectInterviewLanguage from '../../../../FormsComponents/Inputs/SelectSkills/index.js';
import { styles } from './TimeSlotInfo.styles';

const TimeSlotInfo = ({ formik, mySpecialization }) => {
  const { t } = useTranslation();
  const { data: language } = useGetDefLanguageQuery('language-proficiency-names.json');
  const languagesArray = language ? Object.entries(language).map(([_, id]) => id) : [];

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input100}>
        <SpecialisationLevelCombinedSelect
          required
          arrayObj={mySpecialization}
          error={formik.touched.specialization && Boolean(formik.errors.specialization)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperDescription={t('interviews.scheduleInterviewModal.required')}
          helperText={formik.touched.specialization && formik.errors.specialization}
          id='specialization'
          label={t('interviews.scheduleInterviewModal.specializationInputTitle')}
          name='specialization'
          value={formik.values.specialization || ''} // Warning from MUI: 'value is null'
          variant='outlined'
        />
      </Box>
      <Box sx={styles.input100}>
        <SelectInterviewLanguage
          defaultValue={formik.values.language || ''}
          error={formik.touched.language && Boolean(formik.errors.language)}
          formik={formik}
          helperText={formik.touched.language && formik.errors.language}
          id='language'
          label={t('interviews.scheduleInterviewModal.languageInputTitle')}
          languagesArray={languagesArray}
          name='language'
          variant='outlined'
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          required
          error={formik.touched.interviewCount && Boolean(formik.errors.interviewCount)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.interviewCount && formik.errors.interviewCount}
          label={t('interviews.scheduleInterviewModal.interviewCountTitle')}
          name='interviewCount'
          placeholder={formik.initialValues.interviewCount || ''}
          value={formik.values.interviewCount}
        />
        <InfoTooltip
          additionalStyles={styles.iconPosition}
          title='interviews.scheduleInterviewModal.interviewCountTooltip'
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.comment && formik.errors.comment}
          label={t('interviews.scheduleInterviewModal.commentTitle')}
          name='comment'
          placeholder={t('interviews.scheduleInterviewModal.commentPlaceholder')}
          value={formik.values.comment}
        />
      </Box>
      <Box sx={styles.checkbox}>
        <FormCheckbox
          changeHandler={formik.handleChange}
          checked={formik.values.consentStatus}
          error={formik.touched.consentStatus && Boolean(formik.errors.consentStatus)}
          helperText={formik.touched.consentStatus && formik.errors.consentStatus}
          label='interviews.scheduleInterviewModal.consentStatus'
          name='consentStatus'
        />
      </Box>
    </Box>
  );
};

TimeSlotInfo.propTypes = {
  formik: PropTypes.object.isRequired,
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

export default TimeSlotInfo;
