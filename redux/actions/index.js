import {
  SET_PAGE,
  SET_PRICE_PER_FOOT,
  SET_BASE_PRICE,
  SET_ANNOUNCEMENTS,
  ADD_ANNOUNCEMENT,
  TOGGLE_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  SET_ALERTS,
  ADD_ALERT,
  TOGGLE_ALERT,
  DELETE_ALERT,
} from "../constants/action-types";

export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value,
});

export const setPricePerFoot = (value) => ({
  type: SET_PRICE_PER_FOOT,
  payload: value,
});

export const setBasePrice = (value) => ({
  type: SET_BASE_PRICE,
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

export const toggleAnnouncement = (id) => ({
  type: TOGGLE_ANNOUNCEMENT,
  payload: id,
});

export const deleteAnnouncement = (id) => ({
  type: DELETE_ANNOUNCEMENT,
  payload: id,
});

export const setAlerts = (obj) => ({
  type: SET_ALERTS,
  payload: obj,
});

export const addAlert = (obj) => ({
  type: ADD_ALERT,
  payload: obj,
});

export const toggleAlert = (id) => ({
  type: TOGGLE_ALERT,
  payload: id,
});

export const deleteAlert = (id) => ({
  type: DELETE_ALERT,
  payload: id,
});
