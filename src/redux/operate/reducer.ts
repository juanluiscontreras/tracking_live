import {
  OperateState,
  OperateActions,
  NEXT_STEP,
  GO_TO_STEP,
  SAVE_CLIENT_FORM,
  SAVE_PRODUCT_FORM,
  SET_WORKFLOW,
  SET_SERVICE_TYPE,
  SET_BUDGET,
  SET_OPERATION_TYPE,
} from './types';

const initialState: OperateState = {
  clientForm: null,
  productsForm: null,
  serviceType: null,
  workflow: null,
  operationType: null,
  budget: null,
  step: 0,
};

function reducer(state = initialState, action: OperateActions): OperateState {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case GO_TO_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SAVE_CLIENT_FORM:
      return {
        ...state,
        clientForm: action.payload,
      };
    case SAVE_PRODUCT_FORM:
      return {
        ...state,
        productsForm: action.payload,
      };
    case SET_WORKFLOW:
      return {
        ...state,
        workflow: action.payload,
      };
    case SET_SERVICE_TYPE:
      return {
        ...state,
        serviceType: action.payload,
      };
    case SET_OPERATION_TYPE:
      return {
        ...state,
        operationType: action.payload,
      };
    case SET_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
