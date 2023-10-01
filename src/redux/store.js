import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: combineReducers,
  // middleware: () => [sagaMiddleware],
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export default store;
