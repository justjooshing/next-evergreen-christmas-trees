import { combineReducers } from "redux";

import page from "./page";
import announcements from "./announcements";
import pricePerFoot from "./pricePerFoot";
import alerts from "./alerts";

export default combineReducers({ page, announcements, pricePerFoot, alerts });
