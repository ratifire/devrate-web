import React, { useEffect, useMemo, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { ScheduleSchema } from './ScheduleSchema';
import { Box, Checkbox, FormControlLabel, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styles } from './ScheduleInterview.styles';
import { ButtonDef } from '../../Buttons';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import range from 'lodash/range';
import { DateTime } from 'luxon';
import { getDatesInWeek } from '../../../utils/helpers/getWeekDates';
import { CheckboxButton } from './CheckboxButton/CheckboxButton';


const ScheduleInterviewModal = () => {
  const isOpen = useSelector((state) => state.modal.scheduleInterview);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal({ modalName: 'scheduleInterview' }));
  const [date, setDate] = useState(DateTime.now().startOf('day'));
  const [weekDates, setWeekDates] = useState([]);
  const [tab, setTab] = useState(date.toFormat('EEE, d'));

  const { t } = useTranslation();

  useEffect(() => {
    setWeekDates(getDatesInWeek(date));
  }, [date]);

  const weekTitle = useMemo(() => {
    if (DateTime.now().toFormat('W') === date.toFormat('W')) {
      return t('This week');
    }

    return `${weekDates[0].toFormat('d')} - ${weekDates.at(-1).toFormat('d')}`;
  }, [weekDates, date]);

  const tabChangeHandler = (_, newTab) => {
    setTab(newTab);
  };

  const initialValues = {
    dates: {},
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

  const timeClickHandler = (isoTime) => {
    if (formik.values.dates[isoTime]) {
      delete formik.values.dates[isoTime];

      return formik.setFieldValue(`dates`, {
        ...formik.values.dates,
      });
    }

    formik.setFieldValue(`dates`, {
      ...formik.values.dates,
      [isoTime]: true,
    });
  };

  const prevWeekClickHandler = () => {
    setDate((prevVal) => {
      const newDate = prevVal.minus({ weeks: 1 });
      setTab(newDate.toFormat('EEE, d'));

      return newDate;
    })
  }

  const nextWeekClickHandler = () => {
    setDate((prevVal) => {
      const newDate = prevVal.plus({ weeks: 1 });
      setTab(newDate.toFormat('EEE, d'));

      return newDate;
    })
  }

  const generateTimeButtons = (day) => {
    return range(0, 24).map((hour) => {

      const time = day.set({ hour });
      const timeIso = time.toISO();

      return (
        <CheckboxButton
          name="dates"
          key={timeIso}
          value={timeIso}
          isChecked={Boolean(formik.values.dates[timeIso])}
          label={time.toFormat('HH:mm')}
          onChange={timeClickHandler}
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

          <Box sx={styles.weekHeading}>
            <IconButton onClick={prevWeekClickHandler}>
              <ChevronLeft />
            </IconButton>

            <Typography variant="subtitle2">{weekTitle}</Typography>

            <IconButton onClick={nextWeekClickHandler}>
              <ChevronRight />
            </IconButton>
          </Box>

          <Tabs sx={styles.tabsRow} value={tab} onChange={tabChangeHandler}>
            {weekDates.map(day => {
              const tabLabel = day.toFormat('EEE, d');
              return (
                <Tab label={tabLabel} key={`tab-${tabLabel}`} value={tabLabel} sx={styles.tab} />
              );
            })}
          </Tabs>

          {weekDates.map(day => {
            if (tab !== day.toFormat('EEE, d')) {
              return null;
            }

            return (
              <>
                <Box sx={styles.texts}>
                  <Typography variant="subtitle2">Choose a comfort time</Typography>
                  <Typography variant="body1">{weekDates?.[0]?.toFormat('z (ZZZZ)')}</Typography>
                </Box>
                <Box sx={styles.timeGrid} key={`tab-panel-${day}`}>
                  {generateTimeButtons(day)}
                </Box>
              </>
            );
          })}

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
                value="end"
                control={<Checkbox  />}
                label={'Mon-Fri'}
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label={'Sat-Sun'}
                labelPlacement="end"
              />

            </Box>
          </Box>

        </Box>
      </form>
    </ModalLayoutProfile>);
};

export default ScheduleInterviewModal;