import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Checkbox, FormControlLabel, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { selectCurrentUserId } from '../../../../redux/auth/authSlice';
import {
  useCreateInterviewRequestMutation,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useLazyGetMainSpecializationQuery,
} from '../../../../redux/specialization/specializationApiSlice';

import { styles } from './ScheduleInterview.styles';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { getDatesInWeek } from '../../../../utils/helpers/getWeekDates';
import { CheckboxButton } from './CheckboxButton/CheckboxButton';

const ScheduleInterviewModal = ({ role }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isOpen = useSelector((state) => state.modal.scheduleInterview);
  const currentUserId = useSelector(selectCurrentUserId);

  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);
  const [tab, setTab] = useState(date.toFormat('EEE, d'));

  const [getMainSpecialization] = useLazyGetMainSpecializationQuery();
  const [getMainMastery] = useLazyGetMainMasteryBySpecializationIdQuery();
  const [createInterviewRequest] = useCreateInterviewRequestMutation();

  useEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  const formik = useFormik({
    initialValues: { dates: {}, monFri: false, satSun: false },
    onSubmit: async (values, { resetForm }) => {
      const mainSpec = await getMainSpecialization(currentUserId);
      if (!mainSpec.data) return;

      const mainMastery = await getMainMastery(mainSpec.data.id);

      await createInterviewRequest({
        userId: currentUserId,
        masteryId: mainMastery.data.id,
        role,
        availableDates: Object.keys(values.dates),
      });

      resetForm();
      handleClose();
    },
  });

  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));

  const handleTabChange = (_, newTab) => setTab(newTab);

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
    const hour = DateTime.fromISO(isoTime).hour;


    if (formik.values.monFri) {
      weekDates.forEach((weekDay) => {
        if (!weekDay.isWeekend) {
          const timeForWeekDay = weekDay.set({ hour }).toISO();
          if (newDates[timeForWeekDay]) {
            delete newDates[timeForWeekDay];
          } else {
            newDates[timeForWeekDay] = true;
          }
        }
      });
    } else if (formik.values.satSun) {
      weekDates.forEach((weekDay) => {
        if (weekDay.isWeekend) {
          const timeForWeekDay = weekDay.set({ hour }).toISO();
          if (newDates[timeForWeekDay]) {
            delete newDates[timeForWeekDay];
          } else {
            newDates[timeForWeekDay] = true;
          }
        }
      });
    } else {
      if (newDates[isoTime]) {
        delete newDates[isoTime];
      } else {
        newDates[isoTime] = true;
      }
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

  const weekTitle = useMemo(() => {
    return DateTime.now().toFormat('W') === date.toFormat('W')
      ? t('This week')
      : `${weekDates[0].toFormat('d')} - ${weekDates.at(-1).toFormat('d')}`;
  }, [weekDates, date]);

  const renderTabs = () => (
    <Tabs sx={styles.tabsRow} value={tab} onChange={handleTabChange}>
      {weekDates.map((day) => {
        const label = day.toFormat('EEE, d');
        const isPastDate = DateTime.now().startOf('day') > day;

        const disableWeekends = formik.values.monFri && day.isWeekend;
        const disableWeekdays = formik.values.satSun && !day.isWeekend;

        return (
          <Tab
            disabled={isPastDate || disableWeekends || disableWeekdays}
            key={label}
            label={label}
            value={label}
            sx={styles.tab}
          />
        );
      })}
    </Tabs>
  );

  const renderTimeSlots = () => {
    return weekDates.map((day) => {
      if (tab !== day.toFormat('EEE, d')) return null;

      return (
        <React.Fragment key={`tab-panel-${day}`}>
          <Box sx={styles.texts}>
            <Typography variant="subtitle2">Choose a comfort time</Typography>
            <Typography variant="body1">{weekDates[0]?.toFormat('z (ZZZZ)')}</Typography>
          </Box>
          <Box sx={styles.timeGrid}>{generateTimeButtons(day)}</Box>
        </React.Fragment>
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
          <Box sx={styles.weekHeading}>
            <IconButton onClick={() => handleWeekNavigation('prev')}>
              <ChevronLeft />
            </IconButton>
            <Typography variant="subtitle2">{weekTitle}</Typography>
            <IconButton onClick={() => handleWeekNavigation('next')}>
              <ChevronRight />
            </IconButton>
          </Box>
          {renderTabs()}
          {renderTimeSlots()}
          <Box sx={styles.action}>
            <ButtonDef
              variant="contained"
              type="submit"
              label={t('specialization.modal.scheduleModal.schedule')}
              correctStyle={styles.workExperienceBtn}
            />
            <Box sx={styles.checkboxes}>
              <Typography variant="body1">Apply to:</Typography>
              <FormControlLabel
                control={<Checkbox sx={styles.checkbox}/>}
                label="Mon-Fri"
                name="monFri"
                onChange={formik.handleChange}
                checked={formik.values.monFri}

              />
              <FormControlLabel
                control={<Checkbox sx={styles.checkbox} />}
                label="Sat-Sun"
                name="satSun"
                onChange={formik.handleChange}
                checked={formik.values.satSun}

              />
            </Box>
          </Box>
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

ScheduleInterviewModal.propTypes = {
  role: PropTypes.string,
};

export default ScheduleInterviewModal;
