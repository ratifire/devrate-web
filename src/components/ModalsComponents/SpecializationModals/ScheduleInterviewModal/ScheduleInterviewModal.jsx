import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
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
import {
  useCreateInterviewRequestMutation,
  useGetInterviewRequestQuery,
  useUpdateInterviewRequestMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { styles } from './ScheduleInterviewModal.styles';
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
  const userId = useSelector(selectCurrentUserId);
  const [checked, setChecked] = useState([]);
  
  const shouldUpdate = useRef(false);
  
  const { data: currentDates } = useGetInterviewRequestQuery({
    userId,
    role,
  }, { skip: !userId });
  
  useLayoutEffect(() => {
    if (currentDates && currentDates.availableDates) {
      let availableDates = [];
      if (Array.isArray(currentDates.availableDates)) {
        const localDate = DateTime.local();
        const offsetInHours = localDate.offset / 60;
        const timeZone = `UTC${offsetInHours >= 0 ? '+' : ''}${offsetInHours}`;
        shouldUpdate.current = true;
        availableDates = currentDates.availableDates.map((item) => {
          let d = DateTime.fromISO(item, { zone: 'utc' });
          return d.setZone(timeZone).toISO();
        });
      }
      setChecked(Array.from(new Set([...checked, ...availableDates]))); // Запобігаємо дублюванню
    }
  }, [currentDates]);
  
  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);
  
  const [tab, setTab] = useState(date.toFormat('EEE, d'));
  const [createInterviewRequest] = useCreateInterviewRequestMutation();
  const [updateInterviewRequest] = useUpdateInterviewRequestMutation();
  const { masteryId } = useGetMastery();
  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));
  const handleTabChange = (newTab) => setTab(newTab);
  
  useLayoutEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);
  
  const initialValues = {
    dates: {},
  };
  
  const onSubmit = async (values, { resetForm }) => {
    if (shouldUpdate.current) {
      await updateInterviewRequest({
        userId: userId,
        masteryId,
        role,
        availableDates: checked,
      });
    } else {
      await createInterviewRequest({
        userId: userId,
        masteryId,
        role,
        availableDates: checked,
      });
    }
    
    resetForm();
    handleClose();
  };
  
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
    setChecked((prevChecked) =>
      prevChecked.includes(isoTime)
        ? prevChecked.filter((time) => time !== isoTime)
        : [...prevChecked, isoTime],
    );
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
          isChecked={checked.includes(timeIso)}
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
    [weekDates, date],
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
            correctStyle={styles.btn}
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
