import React, { useEffect, useState } from 'react';
import { styles } from './StepContacts.styles';
import { FormInput } from '../../../Inputs';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { StepContactsSchema } from './StepContactsSchema';
import { usePostContactsUserMutation, useGetUserContactsQuery } from '../../../../redux/user/contacts/contactsApiSlice';
import { useSelector } from 'react-redux';
import { ButtonDef } from '../../../Buttons';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';

const StepContacts = () => {
  const currentUser = useSelector(selectCurrentUser);
  const userId = currentUser?.data?.id;
  const { data: userContacts, refetch } = useGetUserContactsQuery(userId);

  const [contactsLoaded, setContactsLoaded] = useState(false);

  useEffect(() => {
    refetch().then(() => {
      setContactsLoaded(true); // Set contacts loaded flag to true when data is fetched
    });
  }, [refetch]);

  const initialValues = {
    telegram: userContacts?.find(contact => contact.type === 'TELEGRAM_LINK')?.value || '',
    linkedIn: userContacts?.find(contact => contact.type === 'LINKEDIN_LINK')?.value || '',
    gitHub: userContacts?.find(contact => contact.type === 'GITHUB_LINK')?.value || '',
    behance: userContacts?.find(contact => contact.type === 'BEHANCE_LINK')?.value || '',
    mail: userContacts?.find(contact => contact.type === 'EMAIL')?.value || '',
    phone: userContacts?.find(contact => contact.type === 'PHONE_NUMBER')?.value || '',
  };

  const [postContactsUser] = usePostContactsUserMutation();

  const onSubmit = async (values) => {
    await postContactsUser({
      userId: userId,
      body: [
        { type: 'TELEGRAM_LINK', value: values.telegram },
        { type: 'EMAIL', value: values.mail },
        { type: 'LINKEDIN_LINK', value: values.linkedIn },
        { type: 'GITHUB_LINK', value: values.gitHub },
        { type: 'BEHANCE_LINK', value: values.behance },
        { type: 'PHONE_NUMBER', value: values.phone },
      ],
    });
    refetch(); // Refetch contacts after submission
  };

  const formik = useFormik({
    initialValues,
    validationSchema: StepContactsSchema,
    onSubmit,
    enableReinitialize: true, // This option allows formik to reinitialize form values when `initialValues` change
  });

  useEffect(() => {
    console.log('User contacts:', userContacts);
  }, [userContacts]);

  if (!contactsLoaded) {
    return <div>Loading...</div>; // Render loading indicator until contacts are loaded
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input100}>
        <FormInput
          name='telegram'
          value={formik.values.telegram}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.telegram'
          helperText={formik.touched.telegram && formik.errors.telegram}
          error={formik.touched.telegram && Boolean(formik.errors.telegram)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='linkedIn'
          value={formik.values.linkedIn}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.linkedIn'
          helperText={formik.touched.linkedIn && formik.errors.linkedIn}
          error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='gitHub'
          value={formik.values.gitHub}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.gitHub'
          helperText={formik.touched.gitHub && formik.errors.gitHub}
          error={formik.touched.gitHub && Boolean(formik.errors.gitHub)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='behance'
          value={formik.values.behance}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.behance'
          helperText={formik.touched.behance && formik.errors.behance}
          error={formik.touched.behance && Boolean(formik.errors.behance)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='mail'
          value={formik.values.mail}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.mail'
          helperText={formik.touched.mail && formik.errors.mail}
          error={formik.touched.mail && Boolean(formik.errors.mail)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='phone'
          value={formik.values.phone}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.phone'
          helperText={formik.touched.phone && formik.errors.phone}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
        />
      </Box>
      <ButtonDef variant='contained' type='submit' label='profile.modal.btn' correctStyle={styles.btn} />
    </form>
  );
};

export default StepContacts;
