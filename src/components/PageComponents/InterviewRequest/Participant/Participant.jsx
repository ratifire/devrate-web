import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { DateTime } from 'luxon';
import CloseIcon from '@mui/icons-material/Close';
import { isEmpty } from 'lodash';
import {
  useDeleteInterviewRequestMutation,
  useDeleteTimeSlotsMutation,
} from '@redux/api/slices/interviewRequestApiSlice.js';
import { formatRoleLetterCase } from '@utils/helpers';
import TimeSlotsGroup from '../TimeSlotsGroup';
import RequestHeader from '../RequsestHeader';
import { getSortedDatesWithLabel, groupDatesByDay, mergeTimeSlotsByRows } from '../interviewRequestsManageData.js';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import { styles } from './Participant.styles.js';

const Participant = ({ data, specialization }) => {
  const { t } = useTranslation();
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteRequest] = useDeleteInterviewRequestMutation();
  const [deleteTimeSlots] = useDeleteTimeSlotsMutation();
  const containerRef = useRef(null);
  const [slotsPerRow, setSlotsPerRow] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const innerOffset = 16 * 2;
        const innerGap = 16 * 5;
        const timeSlotWidth = 209;
        const calculatedSlots = Math.floor((containerWidth - (innerOffset + innerGap)) / timeSlotWidth);
        // const calculatedGap = 16 * (calculatedSlots - 1);
        // calculatedSlots -= calculatedGap;
        setSlotsPerRow(calculatedSlots);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (containerRef.current) {
  //       const containerWidth = containerRef.current.offsetWidth;
  //       const innerOffset = 16 * 2; // Внутренние отступы контейнера (padding)
  //       const timeSlotWidth = 209; // Ширина одного слота
  //
  //       // Рассчитываем количество слотов с учетом отступов и промежутков
  //       const calculatedSlots = Math.floor((containerWidth - innerOffset) / (timeSlotWidth + 16)); // 16 - промежуток между слотами
  //
  //       // Убедимся, что slotsPerRow не меньше 1
  //       setSlotsPerRow(Math.max(1, calculatedSlots));
  //     }
  //   };
  //
  //   handleResize(); // Вызываем сразу при монтировании
  //   window.addEventListener('resize', handleResize);
  //
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const mainMasteryLevelWithName = useMemo(() => {
    if (!specialization || typeof specialization !== 'object') {
      return 'No specialization';
    }
    const level = specialization.mainMasteryLevel || 'No level';
    const name = specialization.name || 'No name';
    return `${level} ${name}`;
  }, [specialization]);

  const languageCode = data?.languageCode?.toLowerCase() || null;

  const languageName = useMemo(() => {
    if (!languageCode) return null;
    return t(`specialization.language.name.${languageCode}`) || 'Unknown Language';
  }, [languageCode, t]);

  const { role, desiredInterview, comment, timeSlots, matchedInterview } = data || {};

  const pandingTimeSlots = timeSlots.filter((slot) => slot.status === 'PENDING').length;
  const sortedDatesWithLabel = useMemo(() => getSortedDatesWithLabel(data || {}), [data]);
  const sortedDatesByDay = useMemo(() => groupDatesByDay(sortedDatesWithLabel), [sortedDatesWithLabel]);

  const slotsByDay = {};
  sortedDatesByDay.forEach((day) => {
    slotsByDay[day.date] = day.items;
  });

  const mergedSlots = useMemo(() => {
    if (slotsPerRow === 0) return [];
    return mergeTimeSlotsByRows(slotsByDay, slotsPerRow);
  }, [slotsByDay, slotsPerRow]);

  const selectedTimeSlots = timeSlots.length;
  const foundTimeSlots = matchedInterview;

  const handleSelectSlot = ({ date, status }) => {
    setSelectedSlots((prev) => {
      const slotExists = prev.some((slot) => slot.date === date);
      if (slotExists) {
        return prev.filter((slot) => slot.date !== date);
      }
      return [...prev, { date, status }];
    });
  };

  const handleDeleteSelected = () => {
    try {
      // Фильтруем PENDING слоты из выбранных
      const pendingSelectedSlots = selectedSlots.filter((slot) => slot.status === 'pending');
      const normalizedSelectedDates = pendingSelectedSlots.map((slot) =>
        DateTime.fromISO(slot.date, { zone: 'utc' }).toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
      );

      // Все выбранные даты для удаления
      const selectedDates = selectedSlots.map((slot) =>
        DateTime.fromISO(slot.date, { zone: 'utc' }).toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
      );

      // Если есть PENDING слоты среди выбранных, проверяем условие
      if (
        normalizedSelectedDates.length > 0 &&
        pandingTimeSlots &&
        desiredInterview > pandingTimeSlots - normalizedSelectedDates.length
      ) {
        enqueueSnackbar(t('The number of timeslots must be greater than or equal to the number of interviews'), {
          variant: 'warning',
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
          autoHideDuration: 3000,
        });
        return;
      }

      // Если PENDING слотов нет или их достаточно, удаляем выбранные слоты
      deleteTimeSlots({
        id: data.id,
        timeSlots: selectedDates,
      });

      setSelectedSlots([]);

      enqueueSnackbar(t('interviewRequest.notifications.delete.oneTimeSlot.success'), {
        variant: 'success',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('interviewRequest.notifications.delete.oneTimeSlot.error') || 'Error deleting time slots', {
        variant: 'error',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    }
  };

  const handleDeleteAllSlots = async () => {
    try {
      await deleteRequest(data?.id).unwrap();
      enqueueSnackbar(t('interviewRequest.notifications.delete.allTimeSlots.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      setSelectedSlots([]);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('interviewRequest.notifications.delete.allTimeSlots.error'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    }
    setOpenDeleteDialog(false);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const pendingSlots = data.timeSlots.filter((slot) => slot.status === 'PENDING').length;

  return (
    <Box ref={containerRef} sx={styles.container}>
      <RequestHeader
        description={comment}
        foundInterviews={foundTimeSlots}
        handleUpdateSlots={handleDeleteSelected}
        hasSelectedSlots={selectedSlots.length > 0}
        interviewRequestObj={data}
        languageCode={languageCode}
        languageName={languageName}
        pendingSlots={pendingSlots}
        role={formatRoleLetterCase(role, t, false)}
        selectedSpecialization={specialization}
        selectedTimeSlots={selectedTimeSlots}
        title={mainMasteryLevelWithName}
        totalInterviews={desiredInterview}
        onDeleteSelected={handleOpenDeleteDialog}
      />

      <Dialog open={openDeleteDialog} sx={styles.dialogWrapper} onClose={handleCloseDeleteDialog}>
        <IconButton aria-label='Close modal' sx={styles.btnIcon} type='button' onClick={handleCloseDeleteDialog}>
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={styles.title}>{t('interviewRequest.deleteAllRequests.title')}</DialogTitle>
        <DialogContent sx={styles.dialogContent}>
          <Typography sx={styles.text}>
            {t('interviewRequest.deleteAllRequests.question', {
              mastery: mainMasteryLevelWithName,
              role: role ? formatRoleLetterCase(role, t, false) : '',
            })}
          </Typography>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Box sx={styles.buttonWrapper}>
            <ButtonDef
              label={t('interviewRequest.deleteAllRequests.cancel')}
              sx={styles.refuseBtn}
              type='button'
              variant='text'
              onClick={handleCloseDeleteDialog}
            />
            <ButtonDef
              label={t('interviewRequest.deleteAllRequests.approve')}
              sx={styles.confirmBtn}
              type='button'
              variant='contained'
              onClick={handleDeleteAllSlots}
            />
          </Box>
        </DialogActions>
      </Dialog>

      {!isEmpty(mergedSlots) &&
        mergedSlots.map((item) => (
          <TimeSlotsGroup
            key={item.dateRange}
            selectedSlots={selectedSlots}
            slotsPerRow={slotsPerRow}
            timeSlots={item}
            onSelectSlot={handleSelectSlot}
          />
        ))}
    </Box>
  );
};
Participant.propTypes = {
  data: PropTypes.object,
  specialization: PropTypes.object,
};

export default Participant;
