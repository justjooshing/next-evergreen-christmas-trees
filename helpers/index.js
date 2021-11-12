import {
  setPricePerFoot,
  addAlert,
  addAnnouncement,
  deleteAlert,
  deleteAnnouncement,
  setAlerts,
  setAnnouncements,
  toggleAlert,
  toggleAnnouncement,
} from "../redux/actions";

const lastFullWeekend = (year, month) => {
  const date = new Date(year, month);
  const weekday = date.getDay(); //gets first day of the month
  const lastSaturday = date.setDate(date.getDate() - weekday - 1); //backtracks to the last Sunday -1 (so, saturday)
  return date.getDate(); //returns day number
};

export const lastSaturday = lastFullWeekend(new Date().getFullYear(), 11);

export const capitalisedWord = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

export const adminActions = {
  alerts: {
    set: setAlerts,
    add: addAlert,
    toggle: toggleAlert,
    delete: deleteAlert,
  },
  announcements: {
    set: setAnnouncements,
    add: addAnnouncement,
    toggle: toggleAnnouncement,
    delete: deleteAnnouncement,
  },
  pricePerFoot: {
    set: setPricePerFoot,
  },
};
