import * as yup from 'yup';

export const siteOwnerValidationSchema = yup.object().shape({
  role: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
