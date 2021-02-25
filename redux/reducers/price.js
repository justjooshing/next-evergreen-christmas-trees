import { SET_PRICE } from "../constants/action-types";

export default function price(state = null, action) {
  switch (action.type) {
    case SET_PRICE:
      return action.payload.value;
    default:
      return state;
  }
}
