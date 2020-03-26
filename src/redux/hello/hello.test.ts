import { storeFactory } from '../../utils/tests';
import { TITLE_CHANGE } from './types';

test('Should change the title with a new one', () => {
  const store = storeFactory({});
  expect(store.getState().hello.title).toBe('Hello');
  store.dispatch({ type: TITLE_CHANGE, payload: 'world' });
  expect(store.getState().hello.title).toBe('world');
});
