import { keyBy, values } from "lodash";

import {
  SET_ANNOUNCEMENTS,
  ADD_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  TOGGLE_ANNOUNCEMENT,
} from "../constants/action-types";

export default function announcements(state = [], action) {
  const { payload } = action;

  switch (action.type) {
    case SET_ANNOUNCEMENTS:
      return payload;

    case ADD_ANNOUNCEMENT:
      payload.visibility = true;
      return [...state, payload];

    case TOGGLE_ANNOUNCEMENT:
      // turning into object to easily find id, and then returning back an array
      const id = payload;
      const keyedValues = keyBy(state, "id");
      const currentVisibility = keyedValues[id].visibility;
      keyedValues[id].visibility = !currentVisibility;
      return values(keyedValues);

    case DELETE_ANNOUNCEMENT:
      const msgsWithoutDeletedMessage = state.filter(
        (item) => item.id !== payload
      );
      return msgsWithoutDeletedMessage;
    default:
      return state;
  }
}
