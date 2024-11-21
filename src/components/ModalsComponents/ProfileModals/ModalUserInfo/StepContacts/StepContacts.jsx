import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useGetUserContactsQuery,
  usePostContactsUserMutation,
} from '../../../../../redux/user/contacts/contactsApiSlice';
import { StepContactsSchema } from '../../../../../utils/valadationSchemas/index';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { FormInput } from '../../../../FormsComponents/Inputs';
import { SOCIAL_TYPES } from '../../../../UI/SocialsLinkList/SocialTypes';
import { styles } from './StepContacts.styles';
import {
  addHttps,
  addPhone,
  addTelegram,
  getDataStepContacts,
} from '../../../../../utils/helpers/helpersForStepContactModal';
import { StepContactsSkeleton } from '../../../../UI/Skeleton';
import { ErrorComponent } from '../../../../UI/Exceptions';

const StepContacts = () => {
  const [postContactsUser, { isLoading, isError: isErrorPostContacts, data: dataPost }] = usePostContactsUserMutation();
  const userId = useSelector((state) => state.auth.user.data.id);
  const {
    data: contactsData,
    isFetching,
    isError: isErrorGetUseContacts,
  } = useGetUserContactsQuery(userId, { skip: !userId });

  const valuesMap = dataPost ? getDataStepContacts(dataPost) : getDataStepContacts(contactsData);

  const initialValues = {
    telegram: '',
    linkedIn: '',
    gitHub: '',
    behance: '',
    mail: '',
    phone: '',
    ...valuesMap,
  };

  const onSubmit = ({ telegram, mail, linkedIn, gitHub, behance, phone }) => {
    postContactsUser({
      userId: userId,
      body: [
        { type: SOCIAL_TYPES.TELEGRAM_LINK, value: addTelegram(telegram) },
        { type: SOCIAL_TYPES.EMAIL, value: mail },
        { type: SOCIAL_TYPES.LINKEDIN_LINK, value: addHttps(linkedIn) },
        { type: SOCIAL_TYPES.GITHUB_LINK, value: addHttps(gitHub) },
        { type: SOCIAL_TYPES.BEHANCE_LINK, value: addHttps(behance) },
        { type: SOCIAL_TYPES.PHONE_NUMBER, value: addPhone(phone) },
      ],
    });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: StepContactsSchema,
    onSubmit,
    enableReinitialize: true,
  });

  if (isErrorGetUseContacts || isErrorPostContacts) {
    return <ErrorComponent />;
  }

  if (isFetching || isLoading) {
    return <StepContactsSkeleton />;
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
          required
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
      <ButtonDef
        disabled={!formik.dirty || formik.isSubmitting || !formik.isValid}
        variant='contained'
        type='submit'
        label='profile.modal.btn'
        correctStyle={styles.btn}
      />
    </form>
  );
};

export default StepContacts;
