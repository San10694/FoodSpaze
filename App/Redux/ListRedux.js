import geolib from "geolib";
import * as _ from "lodash";
import { types } from "./types";

const initialState = {
  isFetching: false,
  error: false,
  currentLocation: {},
  restaurants: {},
  filteredByLocation: [],
  searchList: {}
};

export default function ListReducer(state = initialState, action) {
  console.log("List Redux ", action);
  const { payload } = action;
  switch (action.type) {
    case types.SAVE_CURRENT_POSITION:
      return {
        ...state,
        isFetching: true,
        currentLocation: payload
      };
    case types.GET_RESTAURANT_LIST:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        restaurants: payload,
        filteredByLocation: getFilteredByLocation(
          state,
          payload.restaurantList ? payload.restaurantList : []
        ),
        filteredRestaurants: getFilteredByLocation(
          state,
          payload.restaurantList ? payload.restaurantList : []
        )
      };

    case types.SEARCH_BY_NAME:
      if (payload && payload.length >= 1) {
        var items = [];
        var obj = { search_data_list: [] };
        //console.log("state.contacts.data_list", state.contacts.data_list);
        var data = _.filter(state.filteredRestaurants, item => {
          if (
            item.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
          ) {
            return item;
          }
        });
        items = data;
        return {
          ...state,
          isFetching: false,
          searchList: obj,
          filteredByLocation: items,
          filteredList: []
        };
      } else {
        // console.log("serach list state", state);
        return {
          ...state,
          filteredByLocation: state.filteredRestaurants
        };
      }
    case types.GET_RESTAURANT_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        restaurants: ""
      };
    default:
      return { ...state };
  }
}

function getFilteredByLocation(state, items) {
  console.log("state . geo ", state);
  items.map((item, index) => {
    var distance = geolib.getDistance(
      state.currentLocation.coords,
      item.location
    );
    // console.log("Distance ", (distance % 1000) + " km");
    item.distance = distance % 1000;
    // console.log("updated items ", items);
  });

  return items.sort((a, b) => a.distance - b.distance);
}

///Action Creators
export function getRestaurantList() {
  return {
    type: types.GET_RESTAURANT_LIST,
    payload: null
  };
}

export function saveCurrentLocation(position) {
  return {
    type: types.SAVE_CURRENT_POSITION,
    payload: position
  };
}

export function searchByName(value) {
  return {
    type: types.SEARCH_BY_NAME,
    payload: value
  };
}
