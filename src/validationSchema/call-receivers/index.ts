import * as yup from 'yup';

export const callReceiverValidationSchema = yup.object().shape({
  status: yup.string().required(),
  call_charge: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
