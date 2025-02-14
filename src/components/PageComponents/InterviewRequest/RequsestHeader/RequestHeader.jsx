import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
import { styles } from './RequestHeader.styles.js';

const RequestHeader = ({ title, role, description, stats, onAddTimeslot }) => {
  const { t } = useTranslation();

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
          {role === 'Respondent' && (
            <IconButton aria-label='delete' sx={styles.iconDelete}>
              <DeleteIcon />
            </IconButton>
          )}
          <ButtonDef
            label={t('Аdd time slots')}
            startIcon={<AddIcon />}
            sx={styles.outlined}
            type={'button'}
            variant='outlined'
            onClick={onAddTimeslot}
          />

          <Box sx={styles.menuIcon}>
            {/*<IconButton sx={styles.openMenuDots} onClick={(event) => handleMenuOpen(event)}>*/}
            <IconButton sx={styles.openMenuDots}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.statsContainer}>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Знайдено інтерв’ю:{' '}
          <Typography component='strong' sx={styles.foundInterviews} variant={'subtitle3'}>
            {stats.foundInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Кількість інтерв’ю:{' '}
          <Typography component='strong' sx={styles.totalInterviews} variant={'subtitle3'}>
            {stats.totalInterviews}
          </Typography>
        </Typography>
        <Typography component={'strong'} sx={styles.statItem} variant={'subtitle3'}>
          Обрано таймслотів:{' '}
          <Typography component='strong' sx={styles.selectedTimeslots} variant={'subtitle3'}>
            {stats.selectedTimeslots}
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
  stats: PropTypes.shape({
    foundInterviews: PropTypes.number.isRequired,
    totalInterviews: PropTypes.number.isRequired,
    selectedTimeslots: PropTypes.number.isRequired,
  }).isRequired,
  onAddTimeslot: PropTypes.func.isRequired,
};

export default RequestHeader;
