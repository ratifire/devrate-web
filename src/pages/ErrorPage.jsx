import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import TextAreaInput from '../components/Inputs/TextAreaInput';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='error'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <hr />
        <Link to={`/`}>go to home</Link>
      </p>
      <TextAreaInput
        name='modal.editPage.personalInformation.title'
        label='modal.editPage.personalInformation.title'
        type="text"
        // error
        value="Кваліфікований Senior back-end розробник із 5-річним досвідом.  Працювала з базами даних: MySQL, MariaDB, MongoDB, MVC Framework (CakePHP). Робота з тестовою середовищем для PHP (PHPUnit). TV Archive, написання методів панелі управління / методів SOAP. Робота з тестовою с ередовищем для PHP (PHPUnit). TV Archive, написання методів панелі управління / методів SOAP. Робота з тестовою с ередовищем для PHP (PHPUnit). TV Archive, написання методів панелі управління / методів SOAP."
        helperText="Here is the error" />
    </div>
  );
};

export default ErrorPage;
