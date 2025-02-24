import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import UserAvatar from '../../UserAvatar';
import { styles } from './UserCard.styles';

const UserCard = ({ firstName, lastName, src, role, date, lvl, isViewBtn, onClick, label }) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <UserAvatar
          radius='square'
          size='l'
          src={src}
          userFirstName={firstName}
          userLastName={lastName}
          userName={fullName}
        />
        <Box sx={styles.boxInfo}>
          <Typography component='h5' variant='h5'>
            {fullName}
          </Typography>
          <Typography component='p' sx={styles.role} variant='body'>
            {role}
          </Typography>
          <Typography component='p' sx={styles.data} variant='body'>
            {date}
          </Typography>
          <Typography component='p' sx={styles[lvl]} variant='subtitle2'>
            {`Level ${lvl}`}
          </Typography>
        </Box>
      </Box>
      {isViewBtn && <ButtonDef label={label} sx={styles.btn} variant='contained' onClick={onClick} />}
    </Box>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  src: PropTypes.string,
  role: PropTypes.string,
  date: PropTypes.string,
  lvl: PropTypes.string,
  isViewBtn: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default UserCard;
