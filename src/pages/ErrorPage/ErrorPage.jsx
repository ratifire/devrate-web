import { Box, Button, Typography } from '@mui/material';
import { Link, useRouteError } from 'react-router';
import { styles } from './ErrorPage.styles';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box sx={styles.box}>
      <Typography gutterBottom variant='h1'>
        Oops!
      </Typography>
      <Typography gutterBottom variant='body1'>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography gutterBottom color='error' variant='body2'>
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button color='primary' component={Link} sx={styles.btn} to='/' variant='contained'>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
