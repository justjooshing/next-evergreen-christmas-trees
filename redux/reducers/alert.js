import { SET_ALERT, DELETE_ALERT } from "../constants/action-types";

export default function alert(state = null, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_ALERT:
      return payload;
    case DELETE_ALERT:
      const msgsWithoutDeletedMessage = state.filter(
        (item) => item.id !== payload
      );
      return msgsWithoutDeletedMessage;
    default:
      return state;
  }
}
