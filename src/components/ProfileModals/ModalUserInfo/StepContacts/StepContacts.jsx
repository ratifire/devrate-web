import React from 'react';
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
  const { data: userContacts, isLoading } = useGetUserContactsQuery(userId);

  const initialValues = {
    telegram: userContacts?.find(contact => contact.type === 'TELEGRAM_LINK')?.value || '',
    linkedIn: userContacts?.find(contact => contact.type === 'LINKEDIN_LINK')?.value || '',
    gitHub: userContacts?.find(contact => contact.type === 'GITHUB_LINK')?.value || '',
    behance: userContacts?.find(contact => contact.type === 'BEHANCE_LINK')?.value || '',
    mail: userContacts?.find(contact => contact.type === 'EMAIL')?.value || '',
    phone: userContacts?.find(contact => contact.type === 'PHONE_NUMBER')?.value || '',
  };

  const [postContactsUser] = usePostContactsUserMutation();

  const onSubmit = async ({ telegram, mail, linkedIn, gitHub, behance, phone }) => {
    await postContactsUser({
      userId: userId,
      body: [
        { type: 'TELEGRAM_LINK', value: telegram },
        { type: 'EMAIL', value: mail },
        { type: 'LINKEDIN_LINK', value: linkedIn },
        { type: 'GITHUB_LINK', value: gitHub },
        { type: 'BEHANCE_LINK', value: behance },
        { type: 'PHONE_NUMBER', value: phone },
      ],
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: StepContactsSchema,
    onSubmit,
    enableReinitialize: true,
  });

  if (isLoading) {
    return <div>Loading...</div>; 
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
