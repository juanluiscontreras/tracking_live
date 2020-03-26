import { AppState } from '../store';

export const stepSelector = (appState: AppState) => appState.operate.step;
export const clientForm = (appState: AppState) => appState.operate.clientForm;
export const productForm = (appState: AppState) => appState.operate.productsForm;
export const workflowSelector = (appState: AppState) => appState.operate.workflow;
export const serviceTypeSelector = (appState: AppState) => appState.operate.serviceType;
export const productFormCantBeView = (appState: AppState) => !appState.operate.clientForm;
export const confirmCantBeView = (appState: AppState) => !appState.operate.productsForm;
export const pointSelectionCantBeView = (
  appState: AppState,
) => !appState.operate.productsForm || !appState.operate.clientForm;
export const budgetSelector = (appState: AppState) => appState.operate.budget;
export const operationTypeSelector = (appState: AppState) => appState.operate.operationType;
