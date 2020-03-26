import { storeFactory } from '../../utils/tests';
import { SHOW_ALERT, AlertData } from './types';
import { initialState } from './reducer';

const alert: AlertData = {
  title: 'Hello',
  type: 'error',
};

test('Should change the alert value', () => {
  const store = storeFactory({});
  expect(store.getState().alerts).toEqual(initialState);
  store.dispatch({ type: SHOW_ALERT, payload: alert });
  expect(store.getState().alerts).toEqual(alert);
});
