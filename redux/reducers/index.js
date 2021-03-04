import { combineReducers } from "redux";
import page from "./page";
import announcements from "./announcements";
import price from "./price";
import alert from "./alert";

export default combineReducers({ page, announcements, price, alert });
