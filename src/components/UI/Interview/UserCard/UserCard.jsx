import { Box, Typography, Link } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router';
import links from '@router/links.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import UserAvatar from '../../UserAvatar';
import { styles } from './UserCard.styles';

const UserCard = ({ firstName, lastName, src, role, date, lvl, isViewBtn, onClick, label, id }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Link component={RouterLink} sx={styles.avatarLink} to={`${links.profile}/${id}`}>
          <UserAvatar
            radius='square'
            size='l'
            src={src}
            userFirstName={firstName}
            userLastName={lastName}
            userName={fullName}
          />
        </Link>
        <Box sx={styles.boxInfo}>
          <Link component={RouterLink} sx={styles.fullNameLink} to={`${links.profile}/${id}`}>
            <Typography component='h5' variant='h5'>
              {fullName}
            </Typography>
            <ArrowForwardIosIcon fontSize={'small'} />
          </Link>
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
  id: PropTypes.number,
};

export default UserCard;
