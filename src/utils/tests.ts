import { ShallowWrapper } from 'enzyme';
import { createStore } from 'redux';
import { rootReducer } from '../redux/store';

export const findElementByID = (wrapper: ShallowWrapper, id: string) => wrapper.find(`#${id}`);
export const storeFactory = (initialState: any) => createStore(rootReducer, initialState);
