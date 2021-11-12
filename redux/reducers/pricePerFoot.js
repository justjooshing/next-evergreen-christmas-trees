import { SET_PRICE_PER_FOOT } from "../constants/action-types";

export default function pricePerFoot(state = null, action) {
  switch (action.type) {
    case SET_PRICE_PER_FOOT:
      return action.payload.value;
    default:
      return state;
  }
}
