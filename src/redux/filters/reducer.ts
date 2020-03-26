import {
  FilterState,
  FilterActions,
  GET_PLACES,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  GET_WORKFLOWS,
  GET_WORKFLOWS_SUCCESS,
  GET_WORKFLOWS_FAILURE,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
  GET_STATUSES,
  GET_STATUSES_FAILURE,
  GET_STATUSES_SUCCESS,
} from './types';

const initialState: FilterState = {
  places: {
    destination: null,
    origin: null,
  },
  placesLoading: false,
  placesError: null,
  workflows: null,
  workflowsLoading: false,
  workflowsError: null,
  states: [],
  statesLoading: false,
  statesError: null,
  statuses: null,
  statusesLoading: false,
  statusesError: null,
};

function reducer(state = initialState, action: FilterActions): FilterState {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        placesLoading: true,
        placesError: null,
      };
    case GET_PLACES_SUCCESS:
      return {
        ...state,
        placesLoading: false,
        places: action.payload,
      };
    case GET_PLACES_FAILURE:
      return {
        ...state,
        placesLoading: false,
        placesError: action.payload,
      };
    case GET_WORKFLOWS:
      return {
        ...state,
        workflowsLoading: true,
        workflowsError: null,
      };
    case GET_WORKFLOWS_SUCCESS:
      return {
        ...state,
        workflowsLoading: false,
        workflows: action.payload,
      };
    case GET_WORKFLOWS_FAILURE:
      return {
        ...state,
        workflowsLoading: false,
        workflowsError: action.payload,
      };
    case GET_STATES:
      return {
        ...state,
        statesLoading: true,
        statesError: null,
      };
    case GET_STATES_SUCCESS:
      return {
        ...state,
        statesLoading: false,
        states: state.states.concat(action.payload),
      };
    case GET_STATES_FAILURE:
      return {
        ...state,
        statesLoading: false,
        statesError: action.payload,
      };
    case GET_STATUSES:
      return {
        ...state,
        statusesLoading: true,
        statusesError: null,
      };
    case GET_STATUSES_SUCCESS:
      return {
        ...state,
        statusesLoading: false,
        statuses: action.payload,
      };
    case GET_STATUSES_FAILURE:
      return {
        ...state,
        statusesLoading: false,
        statusesError: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
