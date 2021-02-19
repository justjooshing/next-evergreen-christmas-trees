import { SET_PAGE } from "../constants/action-types";

export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value,
});
