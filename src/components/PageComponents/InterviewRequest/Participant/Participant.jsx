import { Box, Button, DialogActions, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { DateTime } from 'luxon';
import TimeSlotsGroup from '../TimeSlotsGroup';
import RequestHeader from '../RequsestHeader';
// import { getSortedDatesWithLabel, groupDatesByDay, mergeTimeSlotsByRows } from '../interviewRequestsManageData.js';
import { getSortedDatesWithLabel, groupDatesByDay, mergeTimeSlotsByRows } from '../interviewRequestsManageData.js';

import {
  useDeleteInterviewRequestMutation,
  useUpdateTimeSlotsMutation,
} from '../../../../redux/services/interviewRequestApiSlice.js';
import { styles } from './Participant.styles.js';

const Participant = ({ data, specialization, userId }) => {
  const { t } = useTranslation();
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteRequest] = useDeleteInterviewRequestMutation();
  const [updateTimeslots] = useUpdateTimeSlotsMutation();

  const userIdValue = Array.isArray(userId) ? userId[0]?.id : userId?.id;

  const mainMasteryLevelWithName = useMemo(() => {
    return specialization ? `${specialization.mainMasteryLevel} ${specialization.name}` : 'No specialization';
  }, [specialization]);

  const { role, desiredInterview, comment, availableDates, assignedDates } = data;

  const sortedDatesWithLabel = useMemo(() => getSortedDatesWithLabel(data), [data]);
  const sortedDatesByDay = useMemo(() => groupDatesByDay(sortedDatesWithLabel), [sortedDatesWithLabel]);
  const slotsByDay = {};
  sortedDatesByDay.forEach((day) => {
    slotsByDay[day.date] = day.items;
  });
  // Объединяем их в ряды по 6 слотов
  const mergedSlots = mergeTimeSlotsByRows(slotsByDay, 6);
  // console.log(mergedSlots, 'mergedSlots');

  const selectedTimeSlots = availableDates.length;
  const foundTimeSlots = assignedDates.length;

  const handleSelectSlot = (date) => {
    setSelectedSlots((prev) => (prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]));
  };

  const handleDeleteSelected = () => {
    try {
      const normalizedSelectedDates = selectedSlots.map((slot) =>
        DateTime.fromISO(slot, { zone: 'utc' }).toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
      );
      const updatedAvailableDates = data.availableDates.filter((date) => !normalizedSelectedDates.includes(date));

      updateTimeslots({
        id: userIdValue,
        data: {
          role,
          desiredInterview,
          comment,
          availableDates: updatedAvailableDates,
          masteryId: specialization.mainMasteryId,
        },
      });

      setSelectedSlots([]);

      enqueueSnackbar(t('interviewRequest.notifications.delete.oneTimeSlot.success'), {
        variant: 'success',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('interviewRequest.notifications.delete.oneTimeSlot.success'), {
        variant: 'error',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    }
  };

  const handleDeleteAllSlots = async () => {
    try {
      await deleteRequest(data.id).unwrap();
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

  const formatRole = (role, capitalize = true) => {
    const translatedRole = t(`interviewRequest.role.${role.toLowerCase()}`);
    return capitalize ? translatedRole : translatedRole.toLowerCase();
  };

  return (
    <Box sx={styles.container}>
      <RequestHeader
        description={comment}
        foundInterviews={foundTimeSlots}
        handleUpdateSlots={handleDeleteSelected}
        hasSelectedSlots={selectedSlots.length > 0}
        role={formatRole(role, true)}
        selectedTimeSlots={selectedTimeSlots}
        title={mainMasteryLevelWithName}
        totalInterviews={desiredInterview}
        onDeleteSelected={handleOpenDeleteDialog}
      />

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>{t('Видалити запит')}</DialogTitle>
        <DialogContent>
          <Typography>
            {t('Ви впевнені, що хочете видалити запит на {{mastery}} interview у ролі {{role}}?', {
              mastery: mainMasteryLevelWithName,
              role: role ? formatRole(role, false) : '',
            })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>{t('Скасувати')}</Button>
          <Button color='error' onClick={handleDeleteAllSlots}>
            {t('Видалити')}
          </Button>
        </DialogActions>
      </Dialog>

      {mergedSlots.map((item) => (
        <TimeSlotsGroup
          key={item.dateRange}
          selectedSlots={selectedSlots}
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
  userId: PropTypes.array,
};

export default Participant;
