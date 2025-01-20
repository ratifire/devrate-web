import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { closeModal } from '../../../../redux/modal/modalSlice';
import {
  useCreateInterviewRequestMutation,
  useGetInterviewRequestQuery,
  useUpdateInterviewRequestMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { getDatesInWeek } from '../../../../utils/helpers/dateHandlers.js';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import { getUserUTC } from '../../../../utils/helpers/index.js';
import { styles } from './ScheduleInterviewModal.styles';
import { CheckboxButton } from './CheckboxButton/CheckboxButton';
import RenderTabs from './components/TabsRender';
import RenderTimeSlots from './components/RenderTimeSlots';
import WeekNavigation from './components/WeekNavigation';

const ScheduleInterviewModal = () => {
  const { role } = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [checked, setChecked] = useState([]);
  const { masteryId, userId } = useGetMastery();
  const { enqueueSnackbar } = useSnackbar();

  const shouldUpdate = useRef(false);

  const { data: currentDates } = useGetInterviewRequestQuery(
    {
      userId,
      role,
      masteryId,
    },
    { skip: !userId || !masteryId }
  );

  useLayoutEffect(() => {
    if (currentDates && currentDates.availableDates) {
      let availableDates = [];
      if (Array.isArray(currentDates.availableDates)) {
        const timeZone = getUserUTC();
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
  const handleTabChange = (newTab) => setTab(newTab);

  useLayoutEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  const initialValues = {
    dates: {},
  };

  const onSubmit = async () => {
    if (shouldUpdate.current) {
      await updateInterviewRequest({
        userId: userId,
        masteryId,
        role,
        availableDates: checked,
      });
      enqueueSnackbar(t('modalNotifyText.interview.edit.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    } else {
      await createInterviewRequest({
        userId: userId,
        masteryId,
        role,
        availableDates: checked,
      });
      enqueueSnackbar(t('modalNotifyText.interview.create.success'), { variant: 'success' });
    }
    dispatch(closeModal());
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
      prevChecked.includes(isoTime) ? prevChecked.filter((time) => time !== isoTime) : [...prevChecked, isoTime]
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
          disabled={isPastDate}
          isChecked={checked.includes(timeIso)}
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
      <Typography sx={styles.title} variant='subtitle1'>
        {t('specialization.modal.scheduleModal.scheduleInterview')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <WeekNavigation weekTitle={weekTitle} onWeekNav={handleWeekNavigation} />
          <RenderTabs tab={tab} weekDates={weekDates} onChange={handleTabChange} />
          <RenderTimeSlots tab={tab} timeButtons={generateTimeButtons} weekDates={weekDates} />
          <ButtonDef
            label={t('specialization.modal.scheduleModal.schedule')}
            sx={styles.btn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </>
  );
};

ScheduleInterviewModal.propTypes = {
  role: PropTypes.string,
};

export default ScheduleInterviewModal;
