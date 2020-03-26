import {
  LOGIN,
  LOGOUT,
  SET_PROFILE,
  Profile,
  SET_ACTIVE_SERVICES,
} from './types';
import { RetailerActiveServicesResponse } from '../../services/types';

export const login = (payload: string) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setProfile = (payload: Profile) => ({
  type: SET_PROFILE,
  payload,
});

export const setActiveServices = (payload: RetailerActiveServicesResponse[]) => ({
  type: SET_ACTIVE_SERVICES,
  payload,
});
