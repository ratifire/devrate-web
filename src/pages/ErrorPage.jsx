import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Box } from '@mui/material';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Box className='error'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <hr />
        <Link to={`/`}>go to home</Link>
      </p>
    </Box>
  );
};

export default ErrorPage;
