import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import InterviewModalRole from '@utils/constants/InterviewModalRole.js';
import { useState } from 'react';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu/index.js';
import { styles } from './RequestHeader.styles.js';

const RequestHeader = ({
  title,
  selectedSpecialization,
  role,
  description,
  foundInterviews,
  totalInterviews,
  selectedTimeSlots,
  onDeleteSelected,
  hasSelectedSlots,
  handleUpdateSlots,
  languageName,
  languageCode,
  interviewRequestId,
  pendingSlots,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { openModal } = useModalController();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddTimeSlots = () => {
    openModal(
      modalNames.scheduleInterviewModal,
      {
        role,
        selectedSpecialization,
        totalInterviews,
        interviewRequestId,
        pendingSlots,
        modalRole: InterviewModalRole.AddTimeSlots,
      },
      3
    );
  };

  const handleEditFeature = () => {
    openModal(
      modalNames.scheduleInterviewModal,
      {
        role,
        selectedSpecialization,
        totalInterviews,
        interviewRequestId,
        comment: description,
        modalRole: InterviewModalRole.EditFeature,
        language: languageCode,
        pendingSlots,
      },
      1
    );
    handleCloseMenu();
  };

  // TODO: Remove the handleUpdateSlots function. Move the modal window to the other modal windows. Create enum for
  //  interview roles.

  const handleDeleteFeature = () => {
    onDeleteSelected();
    handleCloseMenu();
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>
          {title} {t('interviewRequest.requestHeader.titleLauncher')}{' '}
          <Box
            component='span'
            sx={{
              color: role === 'CANDIDATE' ? styles.respondentColor : styles.interviewerColor,
            }}
          >
            {t(`interviewRequest.role.${role}`)}
          </Box>
        </Typography>

        <Box sx={styles.buttons}>
          <IconButton
            aria-label='delete'
            disabled={!hasSelectedSlots}
            sx={styles.iconDelete}
            onClick={handleUpdateSlots}
          >
            <DeleteIcon />
          </IconButton>
          <ButtonDef
            disabled={hasSelectedSlots}
            label={t('interviewRequest.buttons.addTimeSlot')}
            startIcon={<AddIcon />}
            sx={styles.refuseBtn}
            type={'button'}
            variant='text'
            onClick={handleAddTimeSlots}
          />

          <Box sx={styles.menuIcon}>
            <IconButton disabled={hasSelectedSlots} sx={styles.openMenuDots} onClick={(event) => handleMenuOpen(event)}>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <DropdownMenu
            anchorEl={anchorEl}
            handleCloseMenu={handleCloseMenu}
            handleDeleteFeature={handleDeleteFeature}
            handleEditFeature={handleEditFeature}
          />
        </Box>
      </Box>

      <Box sx={styles.statsContainer}>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          {t('interviewRequest.requestHeader.foundInterviews')}{' '}
          <Typography component='strong' sx={styles.foundInterviews} variant={'subtitle3'}>
            {foundInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          {t('interviewRequest.requestHeader.totalInterviews')}{' '}
          <Typography component='strong' sx={styles.totalInterviews} variant={'subtitle3'}>
            {totalInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          {t('interviewRequest.requestHeader.selectedTimeSlots')}{' '}
          <Typography component='strong' sx={styles.selectedTimeslots} variant={'subtitle3'}>
            {selectedTimeSlots}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          {t('interviewRequest.requestHeader.interviewLanguage')}{' '}
          <Typography component='strong' sx={styles.languageName} variant={'subtitle3'}>
            {languageName}
          </Typography>
        </Typography>
      </Box>

      <Box sx={styles.description}>
        <Typography variant={'body'}>{description}</Typography>
      </Box>
    </Box>
  );
};

RequestHeader.propTypes = {
  title: PropTypes.string.isRequired,
  selectedSpecialization: PropTypes.object.isRequired,
  role: PropTypes.oneOf(['CANDIDATE', 'INTERVIEWER']).isRequired,
  description: PropTypes.string.isRequired,
  foundInterviews: PropTypes.number.isRequired,
  totalInterviews: PropTypes.number.isRequired,
  selectedTimeSlots: PropTypes.number.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
  handleUpdateSlots: PropTypes.func.isRequired,
  hasSelectedSlots: PropTypes.bool.isRequired,
  languageName: PropTypes.string.isRequired,
  languageCode: PropTypes.string.isRequired,
  interviewRequestId: PropTypes.number.isRequired,
  pendingSlots: PropTypes.number.isRequired,
};

export default RequestHeader;
