import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu/index.js';
import { styles } from './RequestHeader.styles.js';

const RequestHeader = ({
  title,
  role,
  description,
  foundInterviews,
  totalInterviews,
  selectedTimeSlots,
  onDeleteSelected,
  hasSelectedSlots,
  handleUpdateSlots,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleCreateInterviweRequest = (event) => {
  //   console.log(event);
  // };

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
            // handleClick={handleCreateInterviweRequest}
            label={t('Аdd time slots')}
            startIcon={<AddIcon />}
            sx={styles.outlined}
            type={'button'}
            variant='outlined'
          />

          <Box sx={styles.menuIcon}>
            <IconButton sx={styles.openMenuDots} onClick={(event) => handleMenuOpen(event)}>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <DropdownMenu
            anchorEl={anchorEl}
            handleCloseMenu={handleCloseMenu}
            handleDeleteFeature={onDeleteSelected}
            // handleEditFeature={handleEditFeature}
          />
        </Box>
      </Box>

      <Box sx={styles.statsContainer}>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Знайдено інтерв’ю:{' '}
          <Typography component='strong' sx={styles.foundInterviews} variant={'subtitle3'}>
            {foundInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Кількість інтерв’ю:{' '}
          <Typography component='strong' sx={styles.totalInterviews} variant={'subtitle3'}>
            {totalInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Обрано таймслотів:{' '}
          <Typography component='strong' sx={styles.selectedTimeslots} variant={'subtitle3'}>
            {selectedTimeSlots}
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
  role: PropTypes.oneOf(['Respondent', 'Interviewer']).isRequired,
  description: PropTypes.string.isRequired,
  foundInterviews: PropTypes.number.isRequired,
  totalInterviews: PropTypes.number.isRequired,
  selectedTimeSlots: PropTypes.number.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
  handleUpdateSlots: PropTypes.func.isRequired,
  hasSelectedSlots: PropTypes.bool.isRequired,
};

export default RequestHeader;
