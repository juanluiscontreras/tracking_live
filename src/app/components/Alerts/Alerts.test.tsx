import * as React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Alerts from './Alerts';
import { storeFactory } from '../../../utils/tests';

const setup = (props: any = null) => shallow(
  <Provider store={storeFactory({})}>
    <Alerts {...props} />
  </Provider>,
);

test('Render Component without errors', () => {
  const wrapper = setup();
  const component = wrapper.find(Alerts);
  expect(component.exists()).toBeTruthy();
});
