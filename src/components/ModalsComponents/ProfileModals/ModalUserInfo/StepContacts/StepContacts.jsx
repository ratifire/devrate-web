import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useGetUserContactsQuery, usePostContactsUserMutation } from '@redux/api/slices/user/contacts/contactsApiSlice';
import { StepContactsSchema } from '@utils/validationSchemas/index';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { FormInput } from '@components/FormsComponents/Inputs';
import { SOCIAL_TYPES } from '@components/UI/SocialsLinkList/SocialTypes';
import { normalizeUrl, addPhone, addTelegram, getDataStepContacts } from '@utils/helpers/urlHelpers.js';
import { StepContactsSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { styles } from './StepContacts.styles';

const StepContacts = () => {
  const [postContactsUser, { isLoading, isError: isErrorPostContacts, data: dataPost }] = usePostContactsUserMutation();
  const userId = useSelector((state) => state.auth.user.data.id);
  const {
    data: contactsData,
    isFetching,
    isError: isErrorGetUseContacts,
  } = useGetUserContactsQuery(userId, { skip: !userId });
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

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

  const onSubmit = async ({ telegram, mail, linkedIn, gitHub, behance, phone }) => {
    try {
      await postContactsUser({
        userId: userId,
        body: [
          { type: SOCIAL_TYPES.TELEGRAM_LINK, value: addTelegram(telegram) },
          { type: SOCIAL_TYPES.EMAIL, value: mail },
          { type: SOCIAL_TYPES.LINKEDIN_LINK, value: normalizeUrl(linkedIn) },
          { type: SOCIAL_TYPES.GITHUB_LINK, value: normalizeUrl(gitHub) },
          { type: SOCIAL_TYPES.BEHANCE_LINK, value: normalizeUrl(behance) },
          { type: SOCIAL_TYPES.PHONE_NUMBER, value: addPhone(phone) },
        ],
      }).unwrap();
      enqueueSnackbar(t('modalNotifyText.contacts.create.success'), { variant: 'success' });
      formik.resetForm();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.contacts.create.error'), { variant: 'error' });
    }
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
      <Box sx={styles.wrapper}>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.telegram && Boolean(formik.errors.telegram)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.telegram && formik.errors.telegram}
            label='profile.modal.userInfo.contact.telegram'
            name='telegram'
            type='text'
            value={formik.values.telegram}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.linkedIn && formik.errors.linkedIn}
            label='profile.modal.userInfo.contact.linkedIn'
            name='linkedIn'
            type='text'
            value={formik.values.linkedIn}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.gitHub && Boolean(formik.errors.gitHub)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.gitHub && formik.errors.gitHub}
            label='profile.modal.userInfo.contact.gitHub'
            name='gitHub'
            type='text'
            value={formik.values.gitHub}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.behance && Boolean(formik.errors.behance)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.behance && formik.errors.behance}
            label='profile.modal.userInfo.contact.behance'
            name='behance'
            type='text'
            value={formik.values.behance}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            required
            error={formik.touched.mail && Boolean(formik.errors.mail)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.mail && formik.errors.mail}
            label='profile.modal.userInfo.contact.mail'
            name='mail'
            type='text'
            value={formik.values.mail}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.phone && formik.errors.phone}
            label='profile.modal.userInfo.contact.phone'
            name='phone'
            type='text'
            value={formik.values.phone}
          />
        </Box>
      </Box>
      <ButtonDef
        disabled={!formik.dirty || formik.isSubmitting || !formik.isValid}
        label={t('profile.modal.btn')}
        loading={isLoading}
        sx={styles.btn}
        type='submit'
        variant='contained'
      />
    </form>
  );
};

export default StepContacts;
