// ConfirmationSchema.js
import * as Yup from 'yup';

export const ConfirmationSchema = Yup.object().shape({
  text0: Yup.string().matches(/^.$/, 'modal.confirmation.text1').required('modal.confirmation.required_text1'),
  text1: Yup.string().matches(/^.$/, 'modal.confirmation.text2').required('modal.confirmation.required_text2'),
  text2: Yup.string().matches(/^.$/, 'modal.confirmation.text3').required('modal.confirmation.required_text3'),
  text3: Yup.string().matches(/^.$/, 'modal.confirmation.text4').required('modal.confirmation.required_text4'),
  text4: Yup.string().matches(/^.$/, 'modal.confirmation.text5').required('modal.confirmation.required_text5'),
  text5: Yup.string().matches(/^.$/, 'modal.confirmation.text6').required('modal.confirmation.required_text6'),
});
