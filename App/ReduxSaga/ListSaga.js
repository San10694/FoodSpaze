import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { getRestaurantList } from "../Services/index";

export function* _getRestaurantList(action) {
  const response = yield getRestaurantList(action.payload);
  if (response.data) {
    const { data } = response;
    console.log("response ", data);
    yield put({ type: types.GET_RESTAURANT_LIST_SUCCESS, payload: data });
  } else {
    yield put({ type: types.GET_RESTAURANT_LIST_FAILURE, payload: "" });
  }
}
