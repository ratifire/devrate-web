import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { getDatesInWeek } from '../../../../../utils/helpers/getWeekDates';
import { getUserUTC } from '../../../../../utils/helpers';
import { useGetInterviewsByMasteryIdQuery } from '../../../../../redux/interviews/interviewRequestsApiSlice';
import { styles } from './ScheduleInterviewSlots.styles';
import { CheckboxButton } from './CheckboxButton/CheckboxButton';
import RenderTabs from './components/TabsRender';
import RenderTimeSlots from './components/RenderTimeSlots';
import WeekNavigation from './components/WeekNavigation';

const ScheduleInterviewSlots = ({ formik }) => {
  const { t } = useTranslation();

  const { data: interviewsByMasteryId } = useGetInterviewsByMasteryIdQuery(formik.values.specialization, {
    skip: !formik.values.specialization,
  });

  // Filter interviewsByMasteryId by the selected role in formik
  const filteredDatesByRole = interviewsByMasteryId?.filter((item) => item.role === formik.values.role);

  const availableDatesMergedArray = filteredDatesByRole?.map((v) => v.timeSlots).flat();

  useEffect(() => {
    if (availableDatesMergedArray) {
      let availableDates = [];
      if (Array.isArray(availableDatesMergedArray)) {
        const timeZone = getUserUTC();
        availableDates = availableDatesMergedArray.map((item) => {
          let d = DateTime.fromISO(item.dateTime, { zone: 'utc' });
          return d.setZone(timeZone).toISO();
        });
      }

      formik.setValues((prevValues) => ({
        ...prevValues,
        timeSlots: Array.from(new Set([...prevValues.timeSlots, ...availableDates])),
      }));
    }
  }, [interviewsByMasteryId]);

  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);

  const [tab, setTab] = useState(date.toFormat('EEE, d'));
  const handleTabChange = (newTab) => setTab(newTab);

  useLayoutEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

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
    const isAvailable = formik.values.addedTimeSlots.includes(isoTime);

    if (isAvailable) {
      // If the time is in availableDates, toggle it (add/remove) in availableDates
      formik.setValues((prevState) => ({
        ...prevState,
        addedTimeSlots: prevState.addedTimeSlots.includes(isoTime)
          ? prevState.addedTimeSlots.filter((time) => time !== isoTime) // Remove if already exists
          : [...prevState.addedTimeSlots, isoTime], // Add if it doesn't exist
      }));
    } else {
      // If the time is not in either array, add it to availableDates by default
      formik.setValues((prevState) => ({
        ...prevState,
        addedTimeSlots: [...prevState.addedTimeSlots, isoTime],
      }));
    }
  };

  const generateTimeButtons = (day) => {
    return range(0, 24).map((hour) => {
      const time = day.set({ hour });
      const timeIso = time.toISO();
      const isPastDate = DateTime.now() > time;

      const isDisabled = formik.values.timeSlots.includes(timeIso);
      const isChecked = formik.values.addedTimeSlots.includes(timeIso);

      return (
        <CheckboxButton
          key={timeIso}
          disabled={isPastDate || isDisabled}
          isChecked={isChecked}
          label={time.toFormat('HH:mm')}
          name='dates'
          value={timeIso}
          onChange={() => handleTimeClick(timeIso)}
        />
      );
    });
  };

  const weekTitle = useMemo(
    () =>
      DateTime.now().toFormat('W') === date.toFormat('W')
        ? t('interviews.scheduleInterviewModal.thisWeek')
        : `${weekDates[0].toFormat('MMMM, d')} - ${weekDates.at(-1).toFormat('MMMM, d')}`,
    [weekDates, date]
  );

  return (
    <>
      <Box sx={styles.wrapper}>
        <WeekNavigation weekTitle={weekTitle} onWeekNav={handleWeekNavigation} />
        <RenderTabs tab={tab} weekDates={weekDates} onChange={handleTabChange} />
        <RenderTimeSlots tab={tab} timeButtons={generateTimeButtons} weekDates={weekDates} />
        {formik.values.addedTimeSlots.length >= formik.values.interviewCount ? (
          <Typography sx={styles.timeslotDescription} variant='body'>
            {t('interviews.scheduleInterviewModal.timeslotDescription1')}
            {formik.values.interviewCount}
            {'. '}
            {t('interviews.scheduleInterviewModal.timeslotDescription2')}
            {formik.values.interviewCount}
            {'. '}
          </Typography>
        ) : (
          <Typography sx={styles.timeslotDescriptionError} variant='body'>
            {t('interviews.scheduleInterviewModal.timeslotDescriptionError')}
            {formik.values.interviewCount}
            {'. '}
          </Typography>
        )}
      </Box>
    </>
  );
};

ScheduleInterviewSlots.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default ScheduleInterviewSlots;
