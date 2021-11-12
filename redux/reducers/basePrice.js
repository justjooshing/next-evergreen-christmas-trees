import { SET_BASE_PRICE } from "../constants/action-types";

export default function basePrice(state = null, action) {
  switch (action.type) {
    case SET_BASE_PRICE:
      return action.payload.value;
    default:
      return state;
  }
}
