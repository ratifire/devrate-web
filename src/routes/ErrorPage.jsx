import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={'error'}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <hr />
        <Link to={`/`}>go to home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
