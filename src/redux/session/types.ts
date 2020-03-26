import { RetailerActiveServicesResponse } from '../../services/types';

export const LOGIN = '@@SESSION/LOGIN';
export const LOGOUT = '@@SESSION/LOGOUT';
export const SET_PROFILE = '@@SESSION/SET_PROFILE';
export const SET_ACTIVE_SERVICES = '@@SESSION/SET_ACTIVE_SERVICES';

export enum SessionState {
  LoggedIn,
  LoggedOut,
}

interface Access {
  code: string,
  userName: string,
  server: string,
  url: string,
  remoteToken: string
}

export interface Profile {
  access: Access[]
  release: string,
  flag: string,
  email: string,
  fullName: string
  roleData: {
    retailerId: number
    retailerName: string
    retailerToken: string
  }
}

export interface Session {
  token: string
  state: SessionState
  profile: Profile
  retailerServices: RetailerActiveServicesResponse[],
}

type LoginAction = {
  type: typeof LOGIN
  payload: string
};

type LogoutAction = {
  type: typeof LOGOUT
};

type SetProfileAction = {
  type: typeof SET_PROFILE
  payload: Profile
}

type SetActiveServices = {
  type: typeof SET_ACTIVE_SERVICES
  payload: RetailerActiveServicesResponse[]
}

export type SessionActions = LoginAction | LogoutAction | SetProfileAction | SetActiveServices;
