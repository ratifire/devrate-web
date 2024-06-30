import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { styles } from './ErrorPage.styles';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Box sx={styles.box}>
      <Typography variant='h1' gutterBottom>
        Oops!
      </Typography>
      <Typography variant='body1' gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant='body2' color='error' gutterBottom>
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button sx={styles.btn} component={Link} to='/' variant='contained' color='primary'>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
