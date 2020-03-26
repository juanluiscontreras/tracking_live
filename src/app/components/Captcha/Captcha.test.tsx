import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Captcha';
import { findElementByID } from '../../../utils/tests';

const setup = (props: any = null) => shallow(<Button {...props} />);

test('Render Component without errors', () => {
  const wrapper = setup({ type: 'submit' });
  const component = findElementByID(wrapper, 'button-id');
  expect(component.length).toBe(1);
});
