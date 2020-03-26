import { AlertData, SHOW_ALERT, CLOSE_ALERT } from './types';

export const showAlert = (payload: AlertData) => ({
  type: SHOW_ALERT,
  payload,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
