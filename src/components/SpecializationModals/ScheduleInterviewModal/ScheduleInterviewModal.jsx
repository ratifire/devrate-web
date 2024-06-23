import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { ScheduleSchema } from './ScheduleSchema';
import { Box, Typography } from '@mui/material';
import { styles } from './ScheduleInterview.styles';
import FormInput from '../../Inputs/FormInput';
import CountrySelect from '../../Inputs/CountrySelect';
import { ButtonDef } from '../../Buttons';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import range from 'lodash/range';

const ScheduleInterviewModal = () => {
  const isOpen = useSelector((state) => state.modal.scheduleInterview);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));
  const [times, setTimes] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    const opts = [];
    for (const hour of range(0, 23, 1)) {
      for (const minute of range(0, 45, 15)) {
        opts.push(`${hour}:${minute}`);
      }
    }
    setTimes(opts);
  }, []);

  const initialValues = {
    name: '',
    speciality: '',
    level: '',
    role: '',
    date: null,
    startTime: '',
    endTime: '',
    socialLinks: [],
  };
  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);

    resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ScheduleSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={handleClose} open={isOpen}>
      <Typography variant="subtitle1" sx={styles.title}>
        {t('specialization.scheduleModal.scheduleInterview')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              name="name"
              value={formik.values.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type="text"
              label="specialization.scheduleModal.name"
              placeholder="profile.modal.workExperience.position_placeholder"
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name="speciality"
              value={formik.values.speciality}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label="specialization.scheduleModal.specialization"
              placeholder="profile.modal.workExperience.companyName_placeholder"
              helperText={formik.touched.speciality && formik.errors.speciality}
              error={formik.touched.speciality && Boolean(formik.errors.speciality)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name="level"
              value={formik.values.level}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type="text"
              label="specialization.scheduleModal.level"
              placeholder="profile.modal.workExperience.position_placeholder"
              helperText={formik.touched.level && formik.errors.level}
              error={formik.touched.level && Boolean(formik.errors.level)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name="role"
              value={formik.values.role}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label="specialization.scheduleModal.role"
              placeholder="profile.modal.workExperience.companyName_placeholder"
              helperText={formik.touched.role && formik.errors.role}
              error={formik.touched.role && Boolean(formik.errors.role)}
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
              sx={styles.input50}
              value={formik.values.date}
              onChange={(value) => formik.setFieldValue('date', value)}
              label={t('specialization.scheduleModal.date')}
              helperText={formik.touched.date && formik.errors.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
            />
          </LocalizationProvider>
          <Box sx={styles.timeWrapper}>
            <CountrySelect
              label={t('specialization.scheduleModal.startTime')}
              value={formik.values.startTime}
              countries={times}
              name="startTime"
              variant="outlined"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onChange={(value) => formik.setFieldValue('startTime', value)}
              helperText={formik.touched.startTime && formik.errors.startTime}
              error={formik.touched.startTime && Boolean(formik.errors.startTime)}
            />

            <CountrySelect
              label={t('specialization.scheduleModal.endTime')}
              value={formik.values.endTime}
              countries={times}
              name="endTime"
              variant="outlined"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onChange={(value) => formik.setFieldValue('endTime', value)}
              helperText={formik.touched.endTime && formik.errors.endTime}
              error={formik.touched.endTime && Boolean(formik.errors.endTime)}
            />
          </Box>


          <Box sx={styles.input100}>
            <CountrySelect
              label={t('specialization.scheduleModal.socialLinks')}
              value={formik.values.socialLinks}
              countries={times}
              name="socialLinks"
              variant="outlined"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onChange={(value) => formik.setFieldValue('socialLinks', value)}
              helperText={formik.touched.socialLinks && formik.errors.socialLinks}
              error={formik.touched.socialLinks && Boolean(formik.errors.socialLinks)}
            />
          </Box>

          <ButtonDef variant="contained" type="submit" label={t('specialization.scheduleModal.schedule')}
                     correctStyle={styles.workExperienceBtn} />

        </Box>
      </form>
    </ModalLayoutProfile>);
};

export default ScheduleInterviewModal;