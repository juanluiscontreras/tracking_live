import { AppState } from '../store';

export const destinationSelector = (state: AppState) => state.filters.places.destination;
export const originSelector = (state: AppState) => state.filters.places.origin;
export const workflowsSelector = (state: AppState) => state.filters.workflows;
export const statusesSelector = (state: AppState) => state.filters.statuses;
