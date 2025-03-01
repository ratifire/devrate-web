import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { getDatesInWeek } from '../../../../../utils/helpers/getWeekDates.js';
import { getUserUTC } from '../../../../../utils/helpers/index.js';
import { useGetInterviewsByMasteryIdQuery } from '../../../../../redux/interviews/interviewRequestsApiSlice.js';
import { styles } from './ScheduleInterviewSlots.styles';
import { CheckboxButton } from './CheckboxButton/CheckboxButton.jsx';
import RenderTabs from './components/TabsRender.jsx';
import RenderTimeSlots from './components/RenderTimeSlots.jsx';
import WeekNavigation from './components/WeekNavigation.jsx';

const ScheduleInterviewSlots = ({ formik }) => {
  const { t } = useTranslation();
  const shouldUpdate = useRef(false);

  const { data: interviewsByMasteryId } = useGetInterviewsByMasteryIdQuery(formik.values.specialization, {
    skip: !formik.values.specialization,
  });

  // Filter interviewsByMasteryId by the selected role in formik
  const filteredDatesByRole = interviewsByMasteryId?.filter((item) => item.role === formik.values.role);

  const availableDatesMergedArray = filteredDatesByRole?.map((v) => v.availableDates).flat();
  // const assignedDatesMergedArray = filteredDatesByRole?.map((v) => v.assignedDates).flat();

  useLayoutEffect(() => {
    if (availableDatesMergedArray) {
      let availableDates = [];
      // let assignedDates = [];
      if (Array.isArray(availableDatesMergedArray)) {
        const timeZone = getUserUTC();
        shouldUpdate.current = true;
        availableDates = availableDatesMergedArray.map((item) => {
          let d = DateTime.fromISO(item, { zone: 'utc' });
          return d.setZone(timeZone).toISO();
        });
        // assignedDates = assignedDatesMergedArray.map((item) => {
        //   let d = DateTime.fromISO(item, { zone: 'utc' });
        //   return d.setZone(timeZone).toISO();
        // });
      }

      formik.setValues((prevValues) => ({
        ...prevValues,
        availableDates: Array.from(new Set([...prevValues.availableDates, ...availableDates])), // Запобігаємо дублюванню
      }));

      // formik.setValues((prevValues) => ({
      //   ...prevValues,
      //   assignedDates: Array.from(new Set([...prevValues.assignedDates, ...assignedDates])), // Запобігаємо дублюванню
      // }));
    }
  }, [interviewsByMasteryId]);

  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);

  const [tab, setTab] = useState(date.toFormat('EEE, d'));
  // const [updateInterviewRequest] = useUpdateInterviewRequestMutation();
  const handleTabChange = (newTab) => setTab(newTab);

  useLayoutEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  // const onSubmit = async () => {
  //   //TODO should be adjusted in useScheduleInterview.js
  //   if (shouldUpdate.current) {
  //     await updateInterviewRequest({
  //       userId: userId,
  //       masteryId,
  //       role,
  //       availableDates: checked,
  //     });
  //     enqueueSnackbar(t('modalNotifyText.interview.edit.success'), {
  //       variant: 'success',
  //       anchorOrigin: {
  //         vertical: 'bottom',
  //         horizontal: 'right',
  //       },
  //     });
  //   }
  // };

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
    formik.setValues((prevState) => ({
      ...prevState,
      availableDates: prevState.availableDates.includes(isoTime)
        ? prevState.availableDates.filter((time) => time !== isoTime)
        : [...prevState.availableDates, isoTime],
    }));
    // formik.setValues((prevState) => ({
    //   ...prevState,
    //   assignedDates: prevState.assignedDates.includes(isoTime)
    //     ? prevState.assignedDates.filter((time) => time !== isoTime)
    //     : [...prevState.assignedDates, isoTime],
    // }));
  };
  const generateTimeButtons = (day) => {
    return range(0, 24).map((hour) => {
      const time = day.set({ hour });
      const timeIso = time.toISO();
      const isPastDate = DateTime.now() > time;

      return (
        <CheckboxButton
          key={timeIso}
          disabled={isPastDate}
          isChecked={formik.values.availableDates.includes(timeIso)}
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
        ? t('This week')
        : `${weekDates[0].toFormat('MMMM, d')} - ${weekDates.at(-1).toFormat('MMMM, d')}`,
    [weekDates, date]
  );

  return (
    <>
      <Box sx={styles.wrapper}>
        <WeekNavigation weekTitle={weekTitle} onWeekNav={handleWeekNavigation} />
        <RenderTabs tab={tab} weekDates={weekDates} onChange={handleTabChange} />
        <RenderTimeSlots tab={tab} timeButtons={generateTimeButtons} weekDates={weekDates} />
        {formik.values.availableDates.length >= formik.values.interviewCount ? (
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
