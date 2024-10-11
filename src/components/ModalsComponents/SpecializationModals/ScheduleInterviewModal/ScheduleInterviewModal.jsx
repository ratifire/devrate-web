import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { selectCurrentUserId } from '../../../../redux/auth/authSlice';
import { useCreateInterviewRequestMutation } from '../../../../redux/specialization/specializationApiSlice';
import { styles } from './ScheduleInterview.styles';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { getDatesInWeek } from '../../../../utils/helpers/getWeekDates';
import { CheckboxButton } from './CheckboxButton/CheckboxButton';
import RenderTabs from './components/TabsRender';
import RenderTimeSlots from './components/RenderTimeSlots';
import WeekNavigation from './components/WeekNavigation';
import { useGetMastery } from '../../../../utils/hooks/specialization';

const ScheduleInterviewModal = () => {
  const { role } = useSelector((state) => state.modal.modalData);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isOpen = useSelector((state) => state.modal.scheduleInterview);
  const currentUserId = useSelector(selectCurrentUserId);

  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);
  const [tab, setTab] = useState(date.toFormat('EEE, d'));
  const [createInterviewRequest] = useCreateInterviewRequestMutation();
  const { masteryId } = useGetMastery();
  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));
  const handleTabChange = (_, newTab) => setTab(newTab);

  useEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  const initialValues={
    dates: {}
  }

  const onSubmit  = async (values, { resetForm }) => {
      await createInterviewRequest({
        userId: currentUserId,
        masteryId,
        role,
        availableDates: Object.keys(values.dates),
      });

      resetForm();
      handleClose();
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const handleWeekNavigation = (direction) => {
    setDate((prevDate) => {
      const newDate = direction === 'prev' ? prevDate.minus({ weeks: 1 }) : prevDate.plus({ weeks: 1 });

      if (newDate < DateTime.now().startOf('week')) {
        return prevDate;
      }

      setTab(newDate.toFormat('EEE, d'));
      return newDate;
    });
  };

  const handleTimeClick = (isoTime) => {
    const newDates = { ...formik.values.dates };

      if (newDates[isoTime]) {
        delete newDates[isoTime];
      } else {
        newDates[isoTime] = true;
      }

    formik.setFieldValue('dates', newDates);
  };

   const generateTimeButtons = (day) => {
    return range(0, 24).map((hour) => {
      const time = day.set({ hour });
      const timeIso = time.toISO();
      const isPastDate = DateTime.now() > time;

      return (
        <CheckboxButton
          key={timeIso}
          name="dates"
          value={timeIso}
          isChecked={Boolean(formik.values.dates[timeIso])}
          label={time.toFormat('HH:mm')}
          onChange={() => handleTimeClick(timeIso)}
          disabled={isPastDate}
        />
      );
    });
  };

  const weekTitle = useMemo(() =>
      DateTime.now().toFormat('W') === date.toFormat('W')
        ? t('This week')
        : `${weekDates[0].toFormat('MMMM, d')} - ${weekDates.at(-1).toFormat('MMMM, d')}`,
    [weekDates, date]
  );

  return (
    <ModalLayoutProfile setOpen={handleClose} open={isOpen}>

      <Typography variant="subtitle1" sx={styles.title}>
        {t('specialization.modal.scheduleModal.scheduleInterview')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <WeekNavigation
           onWeekNav={handleWeekNavigation}
           weekTitle={weekTitle}
          />
          <RenderTabs
            weekDates={weekDates}
            onChange={handleTabChange}
            tab={tab}
          />
          <RenderTimeSlots
            timeButtons={generateTimeButtons}
            weekDates={weekDates}
            tab={tab}
          />
            <ButtonDef
              variant="contained"
              type="submit"
              label={t('specialization.modal.scheduleModal.schedule')}
              correctStyle={styles.workExperienceBtn}
            />
        </Box>
      </form>

    </ModalLayoutProfile>
  );
};

ScheduleInterviewModal.propTypes = {
  role: PropTypes.string,
};

export default ScheduleInterviewModal;
