import { HelloActions, TITLE_CHANGE } from './types';

export const changeTitle = (payload: string): HelloActions => ({
  type: TITLE_CHANGE,
  payload,
});
