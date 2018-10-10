import { takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../Redux/types";
import { _getRestaurantList } from "./ListSaga";

export default function* root() {
  yield takeLatest(types.GET_RESTAURANT_LIST, _getRestaurantList);
}
