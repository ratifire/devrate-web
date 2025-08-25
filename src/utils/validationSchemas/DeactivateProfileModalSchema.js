import * as Yup from 'yup';

export const DeactivateProfileModalSchema = Yup.object().shape({
  checkbox: Yup.boolean().oneOf([true]),
});
