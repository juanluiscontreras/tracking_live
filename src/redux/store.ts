import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import hello from './hello/reducer';

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  hello,
});

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);

enhancers.push(applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeEnhancers(...enhancers));

