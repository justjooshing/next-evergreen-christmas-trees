import { SET_PAGE } from "../constants/action-types";

export default function page(state = "Home", action) {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}
