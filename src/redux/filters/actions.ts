import { Dispatch } from 'redux';
import {
  GET_PLACES,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  Places,
  GET_WORKFLOWS,
  GET_WORKFLOWS_SUCCESS,
  GET_WORKFLOWS_FAILURE,
  Workflow,
  StateResponse,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
  GET_STATUSES,
  GET_STATUSES_FAILURE,
  GET_STATUSES_SUCCESS,
  Statuses,
} from './types';
import FilterServices from '../../services/FilterServices';
import { AppState } from '../store';

// PLACES
const getPlacesSuccess = (payload: Places) => ({
  type: GET_PLACES_SUCCESS,
  payload,
});

const getPlacesFailure = (payload: Error) => ({
  type: GET_PLACES_FAILURE,
  payload,
});

export const getPlaces = () => async (dispatch: Dispatch, getState: () => AppState) => {
  const state = getState();
  if (!state.filters.placesLoading) {
    dispatch({ type: GET_PLACES });
    try {
      const response = await FilterServices.places();
      dispatch(getPlacesSuccess(response.data));
    } catch (error) {
      dispatch(getPlacesFailure(error));
    }
  }
};

// WORKFLOWS
const getWorkflowsSuccess = (payload: Workflow[]) => ({
  type: GET_WORKFLOWS_SUCCESS,
  payload,
});

const getWorkflowsFailure = (payload: Error) => ({
  type: GET_WORKFLOWS_FAILURE,
  payload,
});

export const getWorkflows = () => async (dispatch: Dispatch, getState: () => AppState) => {
  const state = getState();
  if (!state.filters.workflowsLoading) {
    dispatch({ type: GET_WORKFLOWS });
    try {
      const response = await FilterServices.workflows();
      dispatch(getWorkflowsSuccess(response.data));
    } catch (error) {
      dispatch(getWorkflowsFailure(error));
    }
  }
};

// STATES
const getStatesSuccess = (payload: StateResponse) => ({
  type: GET_STATES_SUCCESS,
  payload,
});

const getStatesFailure = (payload: Error) => ({
  type: GET_STATES_FAILURE,
  payload,
});

export const getStates = (workflowTag: string) => async (
  dispatch: Dispatch,
  getState: () => AppState,
) => {
  const state = getState();
  if (!state.filters.statesLoading) {
    dispatch({ type: GET_STATES });
    try {
      const response = await FilterServices.states(workflowTag);
      dispatch(getStatesSuccess(response.data));
    } catch (error) {
      dispatch(getStatesFailure(error));
    }
  }
};

// Statuses
const getStatusesSuccess = (payload: Statuses[]) => ({
  type: GET_STATUSES_SUCCESS,
  payload,
});

const getStatusesFailure = (payload: Error) => ({
  type: GET_STATUSES_FAILURE,
  payload,
});

export const getStatuses = () => async (
  dispatch: Dispatch,
  getState: () => AppState,
) => {
  const state = getState();
  if (!state.filters.statusesLoading) {
    dispatch({ type: GET_STATUSES });
    try {
      const response = await FilterServices.statuses();
      dispatch(getStatusesSuccess(response.data));
    } catch (error) {
      dispatch(getStatusesFailure(error));
    }
  }
};
