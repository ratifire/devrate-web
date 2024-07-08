import React, { useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { ScheduleSchema } from './ScheduleSchema';
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styles } from './ScheduleInterview.styles';
import { ButtonDef } from '../../Buttons';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import range from 'lodash/range';

const days = [
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun',
];


const ScheduleInterviewModal = () => {
  const isOpen = useSelector((state) => state.modal.scheduleInterview);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));
  const [tab, setTab] = useState('mon');

  const { t } = useTranslation();

  const tabChangeHandler = (_, newTab) => {
    setTab(newTab);
  };

  const initialValues = {
    days: {},
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

  const timeClickHandler = (day, time) => {
    if (formik.values.days[day]?.[time]) {
      delete formik.values.days[day][time];

      return formik.setFieldValue(`days.${day}`, {
        ...formik.values.days[day],
      });
    }

    formik.setFieldValue(`days.${day}`, {
      ...formik.values.days[day],
      [time]: 1
    });
  }

  const generateTimeButtons = (day) => {
    return range(0, 23).map((hour) => {
      const hourStr = `${hour}`.padStart(2, '0');

      const time = `${hourStr}:00`;

      return (
        <ButtonDef
          correctStyle={styles.timeButton}
          withTranslation={false}
          key={`${day}-${hour}-00`}
          variant={formik.values.days[day]?.[time] ? 'contained' : 'outlined'}
          type="button"
          label={time}
          handlerClick={() => timeClickHandler(day, time)}
        />
      );
    });
  };

  return (
    <ModalLayoutProfile setOpen={handleClose} open={isOpen}>
      <Typography variant="subtitle1" sx={styles.title}>
        {t('specialization.modal.scheduleModal.scheduleInterview')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>

          <Box>
            <IconButton>
              <ChevronLeft />
            </IconButton>

            <Typography variant="subtitle2">This week</Typography>

            <IconButton>
              <ChevronRight />
            </IconButton>
          </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tab} onChange={tabChangeHandler}>
                {days.map(day => {
                  return (
                    <Tab label={day} key={`tab-${day}`} value={day} />
                  );
                })}
              </Tabs>
            </Box>

            {days.map(day => {
              if (tab !== day) {
                return null;
              }

              return (
                <Box sx={styles.timeGrid} key={`tab-panel-${day}`} >
                  {generateTimeButtons(day)}
                </Box>
              );
            })}

          <ButtonDef
            variant="contained"
            type="submit"
            label={t('specialization.modal.scheduleModal.schedule')}
            correctStyle={styles.workExperienceBtn}
          />

        </Box>
      </form>
    </ModalLayoutProfile>);
};

export default ScheduleInterviewModal;