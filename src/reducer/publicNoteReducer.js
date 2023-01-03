import {
  PUBLIC_NOTES_UPDATE_REQUEST,
  PUBLIC_NOTES_UPDATE_SUCCESS,
  PUBLIC_NOTES_UPDATE_FAIL,
  PUBLIC_NOTES_CREATE_FAIL,
  PUBLIC_NOTES_CREATE_REQUEST,
  PUBLIC_NOTES_CREATE_SUCCESS,
  PUBLIC_NOTES_DELETE_FAIL,
  PUBLIC_NOTES_DELETE_REQUEST,
  PUBLIC_NOTES_DELETE_SUCCESS,
  PUBLIC_NOTES_LIST_FAIL,
  PUBLIC_NOTES_LIST_REQUEST,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  PUBLIC_NOTES_LIST_SUCCESS,
} from "../constants/publicNoteConstant.js";

export const publicNoteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case PUBLIC_NOTES_LIST_REQUEST:
      return { loading: true };
    case PUBLIC_NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case PUBLIC_NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const publicNoteListOwnReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case PUBLIC_NOTES_LIST_REQUEST:
      return { loading: true };
    case PUBLIC_NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case PUBLIC_NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const publicNoteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_NOTES_CREATE_REQUEST:
      return { loading: true };
    case PUBLIC_NOTES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PUBLIC_NOTES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deletPublicNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_NOTES_DELETE_REQUEST:
      return { loading: true };
    case PUBLIC_NOTES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PUBLIC_NOTES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
export const navigateAnyProfileReducer = (state = { profile: [] }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };
    case USER_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
