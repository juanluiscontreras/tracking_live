import {
  AlertsActions,
  SHOW_ALERT,
  CLOSE_ALERT,
  AlertData,
} from './types';

export const initialState: AlertData = {
  type: null,
  title: '',
};

function reducer(state = initialState, action: AlertsActions): AlertData {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...action.payload,
      };
    case CLOSE_ALERT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default reducer;
