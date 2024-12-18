import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import { styles } from './ChatMessage.styles';

const ChatMessage = ({ variant, text, read, time }) => {
  const icons = {
    message: read ? <DoneAllIcon /> : <DoneIcon />,
    sender: null,
  };
  return (
    <Box sx={[styles.wrapper, styles[variant]]}>
      <Typography dangerouslySetInnerHTML={{ __html: text }} variant='body' />
      <Box sx={styles.footer}>
        <Typography variant='caption1'>{time}</Typography>
        {icons[variant]}
      </Box>
    </Box>
  );
};

ChatMessage.propTypes = {
  variant: PropTypes.oneOf(['sender', 'message']).isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  read: PropTypes.bool,
};

export default ChatMessage;
