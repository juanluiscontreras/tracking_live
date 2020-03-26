import { BudgetProduct } from '../../services/types';

export const GO_TO_STEP = '@@OPERATE/GO_TO_STEP';
export const NEXT_STEP = '@@OPERATE/NEXT_STEP';
export const SAVE_CLIENT_FORM = '@@OPERATE/SAVE_CLIENT_FORM';
export const SAVE_PRODUCT_FORM = '@@OPERATE/SAVE_PRODUCT_FORM';
export const SET_WORKFLOW = '@@OPERATE/SET_WORKFLOW';
export const SET_SERVICE_TYPE = '@@OPERATE/SET_SERVICE_TYPE';
export const SET_OPERATION_TYPE = '@@OPERATE/SET_OPERATION_TYPE';
export const SET_BUDGET = '@@OPERATE/SET_BUDGET';

export interface Product {
  [key: string]: string | number
  uuid?: string
  sku?: string
  name: string
  value: number
  weight: number
  high?: number
  long?: number
  width?: number
  amount: number
}

export interface Budget {
  price: number
  urlMap: string
  mapImageUrl: string
  products: BudgetProduct[]
  uuid: string
  point: any
  hours: any
}

export interface AlternativeAddress {
  postalCode: number,
  address: string,
  city: string,
  province: number,
}

export interface ClientFormData {
  name: string
  lastName: string
  dni: string
  email: string
  retailer: number
  phone?: string
  sla?: number
  orderNumber?: string
  observations?: string
  firstState?: number
}

export interface ProductFormData {
  products: Product[]
  package: number
}

export interface OperateState {
  step: number
  workflow: string
  serviceType: string
  operationType: number
  clientForm: ClientFormData
  productsForm: ProductFormData
  budget: Budget
}

export interface GoToStepAction {
  type: typeof GO_TO_STEP
  payload: number
}

export interface NextStepAction {
  type: typeof NEXT_STEP
}

export interface SaveClientFormAction {
  type: typeof SAVE_CLIENT_FORM
  payload: ClientFormData
}

export interface SaveProductFormAction {
  type: typeof SAVE_PRODUCT_FORM
  payload: ProductFormData
}

export interface SetWorkflowAction {
  type: typeof SET_WORKFLOW
  payload: string
}

export interface SetServiceTypeAction {
  type: typeof SET_SERVICE_TYPE
  payload: string
}

export interface SetOperationTypeAction {
  type: typeof SET_OPERATION_TYPE
  payload: number
}

export interface SetBudgetAction {
  type: typeof SET_BUDGET
  payload: Budget
}

export type OperateActions =
GoToStepAction | NextStepAction | SaveClientFormAction | SaveProductFormAction |
SetWorkflowAction | SetServiceTypeAction | SetBudgetAction | SetOperationTypeAction
