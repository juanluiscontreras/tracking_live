import { HelloState, HelloActions, TITLE_CHANGE } from './types';

const initialState: HelloState = {
  title: 'Hello',
};

function reducer(state = initialState, action: HelloActions): HelloState {
  switch (action.type) {
  case TITLE_CHANGE:
    return {
      title: action.payload,
    };

  default:
    return state;
  }
}

export default reducer;
