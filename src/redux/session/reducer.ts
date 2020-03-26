import {
  SessionState,
  SessionActions,
  LOGIN,
  LOGOUT,
  Session,
  SET_PROFILE,
  SET_ACTIVE_SERVICES,
} from './types';
import { getValue, saveValue, removeItem } from '../../utils/localStorage';
import api from '../../config/api';

const initialState: Session = {
  token: getValue('token') || '',
  state: !getValue('token') ? SessionState.LoggedOut : SessionState.LoggedIn,
  profile: null,
  retailerServices: null,
};

function reducer(state = initialState, action: SessionActions): Session {
  switch (action.type) {
    case LOGIN:
      saveValue('token', action.payload);
      api.defaults.headers = {
        apiKey: action.payload,
      };
      return {
        ...state,
        token: action.payload,
        state: SessionState.LoggedIn,
      };
    case LOGOUT:
      removeItem('token');
      api.defaults.headers = {
        apiKey: null,
      };
      return {
        ...state,
        token: '',
        state: SessionState.LoggedOut,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_ACTIVE_SERVICES:
      return {
        ...state,
        retailerServices: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
