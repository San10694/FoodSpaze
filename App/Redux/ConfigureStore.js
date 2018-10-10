import { createStore, applyMiddleware } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import rootReducer from "../Redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "../ReduxSaga";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["invoice"], // invoice will not be persisted
  debug: true //to get useful logging
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
