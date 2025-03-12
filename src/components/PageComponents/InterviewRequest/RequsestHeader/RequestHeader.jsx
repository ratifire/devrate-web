import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu/index.js';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import InterviewModalRole from '../../../../utils/constants/InterviewModalRole.js';
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
  interviewRequestObj,
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
    const formattedRole = role === 'Interviewer' ? 'INTERVIEWER' : role === 'Respondent' ? 'CANDIDATE' : role;
    const interviewRequestId = interviewRequestObj?.role === formattedRole ? interviewRequestObj.id : null;

    openModal(
      modalNames.scheduleInterviewModal,
      { role: formattedRole, selectedSpecialization, interviewRequestId, modalRole: 'AddTimeSlots' },
      3
    );
  };

  const handleEditFeature = () => {
    const formattedRole = role === 'Interviewer' ? 'INTERVIEWER' : role === 'Respondent' ? 'CANDIDATE' : role;
    const interviewRequestId = interviewRequestObj?.role === formattedRole ? interviewRequestObj.id : null;
    openModal(
      modalNames.scheduleInterviewModal,
      { role: formattedRole, selectedSpecialization, interviewRequestId, modalRole: InterviewModalRole.EditFeature },
      1
    );
    handleCloseMenu();
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>
          {title} as a{' '}
          <Box
            component='span'
            sx={{
              color: role === 'Respondent' ? styles.respondentColor : styles.interviewerColor,
            }}
          >
            {role}
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
            handleDeleteFeature={onDeleteSelected}
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
  role: PropTypes.oneOf(['Respondent', 'Interviewer']).isRequired,
  description: PropTypes.string.isRequired,
  foundInterviews: PropTypes.number.isRequired,
  totalInterviews: PropTypes.number.isRequired,
  selectedTimeSlots: PropTypes.number.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
  handleUpdateSlots: PropTypes.func.isRequired,
  hasSelectedSlots: PropTypes.bool.isRequired,
  languageName: PropTypes.string.isRequired,
  interviewRequestObj: PropTypes.object.isRequired,
};

export default RequestHeader;
