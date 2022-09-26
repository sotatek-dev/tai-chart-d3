import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { persistReducer } from "redux-persist";
import localforage from "localforage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducers from "../reducers";

const history = createBrowserHistory();
const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const composeEnhancers = (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

  const persistConfig = {
    key: "root",
    storage: localforage,
    stateReconciler: autoMergeLevel2,
    blacklist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;

export { history };
