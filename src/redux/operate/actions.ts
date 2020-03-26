import {
  GO_TO_STEP,
  NEXT_STEP,
  SAVE_CLIENT_FORM,
  SAVE_PRODUCT_FORM,
  ClientFormData,
  SET_WORKFLOW,
  SET_SERVICE_TYPE,
  ProductFormData,
  SET_BUDGET,
  Budget,
  SET_OPERATION_TYPE,
} from './types';

export const goToStep = (payload: number) => ({
  type: GO_TO_STEP,
  payload,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const saveClientForm = (payload: ClientFormData) => ({
  type: SAVE_CLIENT_FORM,
  payload,
});

export const saveProductForm = (payload: ProductFormData) => ({
  type: SAVE_PRODUCT_FORM,
  payload,
});

export const setWorkflow = (payload: string) => ({
  type: SET_WORKFLOW,
  payload,
});

export const setServiceType = (payload: string) => ({
  type: SET_SERVICE_TYPE,
  payload,
});

export const setOperationType = (payload: number) => ({
  type: SET_OPERATION_TYPE,
  payload,
});

export const setBudget = (payload: Budget) => ({
  type: SET_BUDGET,
  payload,
});
