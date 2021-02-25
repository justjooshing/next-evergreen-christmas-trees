import {
  SET_PAGE,
  SET_PRICE,
  SET_ANNOUNCEMENTS,
  ADD_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
} from "../constants/action-types";

export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value,
});

export const setPrice = (value) => ({
  type: SET_PRICE,
  payload: value,
});

export const setAnnouncements = (arr) => ({
  type: SET_ANNOUNCEMENTS,
  payload: arr,
});

export const addAnnouncement = (obj) => ({
  type: ADD_ANNOUNCEMENT,
  payload: obj,
});

export const deleteAnnouncement = (id) => ({
  type: DELETE_ANNOUNCEMENT,
  payload: id,
});
