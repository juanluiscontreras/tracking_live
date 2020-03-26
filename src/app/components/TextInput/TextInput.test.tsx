import * as React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';
import { findElementByID } from '../../../utils/tests';

const setup = (props: any = null) => shallow(<TextInput {...props} />);

test('Render Component without errors', () => {
  const wrapper = setup({ meta: {}, input: {} });
  const component = findElementByID(wrapper, 'text-input-id');
  expect(component.length).toBe(1);
});
