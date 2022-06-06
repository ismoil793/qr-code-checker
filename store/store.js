import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/root";

// store plugin to check requests to server and store
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const initialState = {};

const initStore = () => createStore(rootReducer, initialState, enhancer);

// eslint-disable-next-line import/prefer-default-export
export const wrapper = createWrapper(initStore);
