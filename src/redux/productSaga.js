import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
function* getData() {
  console.log("getData  sagacalled");
  const data = yield fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data: jsonData });
}
function* productSaga() {
  console.log("product saga called");
  yield takeEvery(PRODUCT_LIST, getData);
  console.log("product saga after getData called");
}
export default productSaga;
