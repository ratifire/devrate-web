import * as Yup from 'yup';

export const ConfirmationSchema = Yup.object().shape({
  text0: Yup.string().matches(/^.$/, 'Text 1 must be exactly one character').required('Text 1 is required'),
  text1: Yup.string().matches(/^.$/, 'Text 2 must be exactly one character').required('Text 2 is required'),
  text2: Yup.string().matches(/^.$/, 'Text 3 must be exactly one character').required('Text 3 is required'),
  text3: Yup.string().matches(/^.$/, 'Text 4 must be exactly one character').required('Text 4 is required'),
  text4: Yup.string().matches(/^.$/, 'Text 5 must be exactly one character').required('Text 5 is required'),
  text5: Yup.string().matches(/^.$/, 'Text 6 must be exactly one character').required('Text 6 is required'),
});
