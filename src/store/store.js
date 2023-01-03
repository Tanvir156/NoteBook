import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  updateProfileReducer,
} from "./../reducer/userReducers";
import {
  noteListReducer,
  noteCreateReducer,
  noteDeleteReducer,
  noteUpdateReducer,
} from "./../reducer/notesReducers";

import {
  publicNoteCreateReducer,
  publicNoteListReducer,
  publicNoteListOwnReducer,
  deletPublicNoteReducer,
  navigateAnyProfileReducer,
} from "./../reducer/publicNoteReducer";

import {
  readAnnouncementReducer,
  setAnnouncementReducer,
  readAnnouncementReducerown,
} from "./../reducer/setAnnouncementReducer";

const reducer = combineReducers({
  noteList: noteListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteCreate: noteCreateReducer,
  publicNoteCreate: publicNoteCreateReducer,
  publicNoteList: publicNoteListReducer,
  publicNoteListOwn: publicNoteListOwnReducer,
  deletPublicNote: deletPublicNoteReducer,
  noteDelete: noteDeleteReducer,
  noteUpdate: noteUpdateReducer,
  updateProfile: updateProfileReducer,
  navigateAnyProfile: navigateAnyProfileReducer,
  setAnnouncment: setAnnouncementReducer,
  readAnnouncment: readAnnouncementReducer,
  readAnnouncementown: readAnnouncementReducerown,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
