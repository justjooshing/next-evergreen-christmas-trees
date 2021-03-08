import { keyBy, values } from "lodash";

import {
  SET_ALERTS,
  ADD_ALERT,
  DELETE_ALERT,
  TOGGLE_ALERT,
} from "../constants/action-types";

export default function alert(state = [], action) {
  const { payload } = action;

  switch (action.type) {
    case SET_ALERTS:
      return payload;

    case ADD_ALERT:
      payload.visibility = true;
      return [...state, payload];

    case TOGGLE_ALERT:
      // turning into object to easily find id, and then returning back an array
      const id = payload;
      const keyedValues = keyBy(state, "id");
      const currentVisibility = keyedValues[id].visibility;
      keyedValues[id].visibility = !currentVisibility;
      return values(keyedValues);

    case DELETE_ALERT:
      const msgsWithoutDeletedMessage = state.filter(
        (item) => item.id !== payload
      );
      return msgsWithoutDeletedMessage;
    default:
      return state;
  }
}
