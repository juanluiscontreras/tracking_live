import { ServicesTypes, OperationType } from '../../constants/pickit';

export const GET_PLACES = '@@FILTERS/GET_PLACES';
export const GET_PLACES_SUCCESS = '@@FILTERS/GET_PLACES_SUCCESS';
export const GET_PLACES_FAILURE = '@@FILTERS/GET_PLACES_FAILURE';
export const GET_WORKFLOWS = '@@FILTERS/GET_WORKFLOWS';
export const GET_WORKFLOWS_SUCCESS = '@@FILTERS/GET_WORKFLOWS_SUCCESS';
export const GET_WORKFLOWS_FAILURE = '@@FILTERS/GET_WORKFLOWS_FAILURE';
export const GET_STATES = '@@FILTERS/GET_STATES';
export const GET_STATES_SUCCESS = '@@FILTERS/GET_STATES_SUCCESS';
export const GET_STATES_FAILURE = '@@FILTERS/GET_STATES_FAILURE';
export const GET_STATUSES = '@@FILTERS/GET_STATUSES';
export const GET_STATUSES_SUCCESS = '@@FILTERS/GET_STATUSES_SUCCESS';
export const GET_STATUSES_FAILURE = '@@FILTERS/GET_STATUSES_FAILURE';

export interface Places {
  origin: { key: string, value: string }[],
  destination: { key: string, value: string }[]
}

export interface ServiceTypeObject {
  serviceTypeTag: ServicesTypes
  name: string
  id: number
}

export interface OperationTypeObject {
  id: OperationType
  name: string
}

export interface Workflow {
  id: number
  name: string
  tag: string
}

// This is the response structure of the service
export interface StateResponse {
  name: string
  state: State[]
  substate: SubState[]
}

export interface Statuses {
  id: number
  name: string
}

export interface State {
  id: number
  name: string
  tag: string
}

export interface SubState {
  id: number
  stateId: number
  name: string
  tag: string
}

export interface FilterState {
  places: Places
  placesLoading: boolean
  placesError: Error
  workflows: Workflow[]
  workflowsLoading: boolean
  workflowsError: Error
  states: StateResponse[]
  statesLoading: boolean
  statesError: Error
  statuses: Statuses[],
  statusesLoading: boolean,
  statusesError: Error,
}

// PLACES
type GetPlacesAction = {
  type: typeof GET_PLACES
}

type GetPlacesSuccessAction = {
  type: typeof GET_PLACES_SUCCESS
  payload: Places
}

type GetPlacesFailureAction = {
  type: typeof GET_PLACES_FAILURE
  payload: Error
}

// WORKFLOWS
type GetWorkflowsAction = {
  type: typeof GET_WORKFLOWS
}

type GetWorkflowsSuccessAction = {
  type: typeof GET_WORKFLOWS_SUCCESS
  payload: Workflow[]
}

type GetWorkflowsFailureAction = {
  type: typeof GET_WORKFLOWS_FAILURE
  payload: Error
}

// STATES
type GetStatesAction = {
  type: typeof GET_STATES
}

type GetStatesSuccessAction = {
  type: typeof GET_STATES_SUCCESS
  payload: StateResponse
}

type GetStatesFailureAction = {
  type: typeof GET_STATES_FAILURE
  payload: Error
}

// STATUSES
type GetStatusesAction = {
  type: typeof GET_STATUSES
}

type GetStatusesSuccessAction = {
  type: typeof GET_STATUSES_SUCCESS
  payload: Statuses[]
}

type GetStatusesFailureAction = {
  type: typeof GET_STATUSES_FAILURE
  payload: Error
}

export type FilterActions = GetPlacesAction
& GetPlacesSuccessAction
& GetPlacesFailureAction
& GetWorkflowsAction
& GetWorkflowsSuccessAction
& GetWorkflowsFailureAction
& GetStatesAction
& GetStatesSuccessAction
& GetStatesFailureAction
& GetStatusesAction
& GetStatusesSuccessAction
& GetStatusesFailureAction;
