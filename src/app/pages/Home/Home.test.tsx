import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { findElementByID } from '../../../utils/tests';
import { MapStateToPropsTypes } from './types';
import { Home } from './Home';
import themes from '../../../constants/themes';

const setup = (props: any = null) => shallow(<Home {...props} />);

test('Render HomeComponent without errors', () => {
  const wrapper = setup();
  const component = findElementByID(wrapper, 'home-id');
  expect(component.length).toBe(1);
});

test('Should change word hello with world', () => {
  const props: MapStateToPropsTypes = { title: 'Hello' };
  const wrapper = setup(props);
  expect(findElementByID(wrapper, 'home-id').text()).toBe('Hello');
  wrapper.setProps({ title: 'world' });
  expect(findElementByID(wrapper, 'home-id').text()).toBe('world');
});

test('Shoul change the theme with the select', () => {
  const props: any = { };
  const cMounted = mount(<Home {...props} />);
  const appliedTheme = document.getElementsByTagName('html')[0].className;
  expect(appliedTheme).toBe(themes.default);
  cMounted.find('#theme-select').simulate('change', { target: { value: themes.dark } });
  const appliedDarkTheme = document.getElementsByTagName('html')[0].className;
  expect(appliedDarkTheme).toBe(themes.dark);
});
