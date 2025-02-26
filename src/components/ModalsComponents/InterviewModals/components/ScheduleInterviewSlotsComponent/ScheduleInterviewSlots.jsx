import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
// import { getDatesInWeek } from '../../../../../utils/helpers/getWeekDates.js';
import { getUserUTC } from '../../../../../utils/helpers/index.js';
import { useGetInterviewRequestQuery } from '../../../../../redux/interviews/interviewRequestsApiSlice.js';
import { styles } from './ScheduleInterviewSlots.styles';
import { CheckboxButton } from './CheckboxButton/CheckboxButton.jsx';
import RenderTabs from './components/TabsRender.jsx';
import RenderTimeSlots from './components/RenderTimeSlots.jsx';
import WeekNavigation from './components/WeekNavigation.jsx';

const ScheduleInterviewSlots = ({ formik }) => {
  const { t } = useTranslation();
  const shouldUpdate = useRef(false);

  const { data: currentDates } = useGetInterviewRequestQuery();
  const availableDatesMergedArray = currentDates?.map((v) => v.availableDates).flat();
  // const { data: interviewsByMastery } = useGetInterviewsByMasteryIdQuery(masteryId);

  useLayoutEffect(() => {
    if (availableDatesMergedArray) {
      let availableDates = [];
      if (Array.isArray(availableDatesMergedArray)) {
        const timeZone = getUserUTC();
        shouldUpdate.current = true;
        availableDates = availableDatesMergedArray.map((item) => {
          let d = DateTime.fromISO(item, { zone: 'utc' });
          return d.setZone(timeZone).toISO();
        });
      }
      //TODO add logic related to assignedDates. Make sure that time slots disabled
      // setChecked(Array.from(new Set([...checked, ...availableDates]))); // Запобігаємо дублюванню
      formik.setValues((prevValues) => ({
        ...prevValues,
        availableDates: Array.from(new Set([...prevValues.availableDates, ...availableDates])), // Запобігаємо дублюванню
      }));
    }
  }, [currentDates]);

  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);

  const [tab, setTab] = useState(date.toFormat('EEE, d'));
  // const [updateInterviewRequest] = useUpdateInterviewRequestMutation();
  const handleTabChange = (newTab) => setTab(newTab);

  const getDatesInWeek = () => {};

  useLayoutEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  // const onSubmit = async () => {
  //   //TODO should be adjusted in useSchduleInterview.js
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
    //TODO should be used formik only. SetChecked to be removed
    // setChecked((prevChecked) =>
    //   prevChecked.includes(isoTime) ? prevChecked.filter((time) => time !== isoTime) : [...prevChecked, isoTime]
    // );

    formik.setValues((prevState) => ({
      ...prevState,
      availableDates: prevState.availableDates.includes(isoTime)
        ? prevState.availableDates.filter((time) => time !== isoTime)
        : [...prevState.availableDates, isoTime],
    }));
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
          // isChecked={checked.includes(timeIso)}
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
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <WeekNavigation weekTitle={weekTitle} onWeekNav={handleWeekNavigation} />
          <RenderTabs tab={tab} weekDates={weekDates} onChange={handleTabChange} />
          <RenderTimeSlots tab={tab} timeButtons={generateTimeButtons} weekDates={weekDates} />
        </Box>
      </form>
    </>
  );
};

ScheduleInterviewSlots.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default ScheduleInterviewSlots;
