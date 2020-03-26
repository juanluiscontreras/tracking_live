import { AppState } from '../store';
import { Workflow, ServiceTypeObject, OperationTypeObject } from '../filters/types';

export const sessionStateSelector = (state: AppState) => state.session.state;
export const profileSelector = (state: AppState) => state.session.profile;
export const fullNameSelector = (
  state: AppState,
) => (state.session.profile ? state.session.profile.fullName : null);
export const flagSelector = (
  state: AppState,
) => (state.session.profile ? state.session.profile.flag : null);
export const retailerIdSelector = (
  state: AppState,
) => (state.session.profile !== null ? state.session.profile.roleData.retailerId : null);
export const tokenIdSelector = (
  state: AppState,
) => (state.session.profile !== null ? state.session.profile.roleData.retailerToken : null);
export const retailerNameSelector = (
  state: AppState,
) => (state.session.profile !== null ? state.session.profile.roleData.retailerName : null);
export const activeWorkflowsSelector = (
  state: AppState,
): Workflow[] => (state.session.retailerServices ? state.session.retailerServices.map(
  (wkf) => ({ id: wkf.id, tag: wkf.workflowTag, name: wkf.name }),
) : null);
export const activeOperationTypesSelector = (state: AppState): OperationTypeObject[] => {
  if (state.session.retailerServices) {
    const selectedWorkflow = state.session.retailerServices.find(
      (wkf) => wkf.workflowTag === state.operate.workflow,
    );
    if (selectedWorkflow) {
      const operationTypes: OperationTypeObject[] = [];
      selectedWorkflow.serviceType.forEach(
        (st) => {
          const filteredOp = st.operationTypes.filter(
            (opt) => !operationTypes.some((o) => o.id === opt.id),
          );
          filteredOp.forEach((fOpt) => {
            operationTypes.push({
              id: fOpt.id,
              name: fOpt.name,
            });
          });
        },
      );
      return operationTypes;
    }
    return null;
  }
  return null;
};
export const activeServiceTypesSelector = (
  state: AppState,
): ServiceTypeObject[] => {
  if (state.session.retailerServices) {
    const selectedWorkflow = state.session.retailerServices.find(
      (wkf) => wkf.workflowTag === state.operate.workflow,
    );
    if (selectedWorkflow) {
      const serviceTypes: ServiceTypeObject[] = [];
      selectedWorkflow.serviceType.forEach(
        (st) => {
          if (st.operationTypes.some((opt) => opt.id === state.operate.operationType)) {
            serviceTypes.push({
              id: st.id,
              name: st.name,
              serviceTypeTag: st.serviceTypeTag,
            });
          }
        },
      );
      return serviceTypes;
    }
    return null;
  }
  return null;
};
