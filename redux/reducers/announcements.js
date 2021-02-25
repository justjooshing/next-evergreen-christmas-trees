import {
  SET_ANNOUNCEMENTS,
  ADD_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
} from "../constants/action-types";

export default function announcements(state = [], action) {
  const { payload } = action;
  switch (action.type) {
    case SET_ANNOUNCEMENTS:
      return payload;
    case ADD_ANNOUNCEMENT:
      return [...state, payload];
    case DELETE_ANNOUNCEMENT:
      const msgsWithoutDeletedMessage = state.filter(
        (item) => item.id !== payload
      );
      return msgsWithoutDeletedMessage;
    default:
      return state;
  }
}
