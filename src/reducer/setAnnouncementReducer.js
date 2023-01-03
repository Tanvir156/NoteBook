import {
  ANNOUNCMENT_UPDATE_REQUEST,
  ANNOUNCMENT_UPDATE_SUCCESS,
  ANNOUNCMENT_UPDATE_FAIL,
  ANNOUNCMENT_CREATE_FAIL,
  ANNOUNCMENT_CREATE_REQUEST,
  ANNOUNCMENT_CREATE_SUCCESS,
  ANNOUNCMENT_DELETE_FAIL,
  ANNOUNCMENT_DELETE_REQUEST,
  ANNOUNCMENT_DELETE_SUCCESS,
  ANNOUNCMENT_LIST_FAIL,
  ANNOUNCMENT_LIST_REQUEST,
  ANNOUNCMENT_LIST_SUCCESS,
  ANNOUNCMENT_LIST_FAIL_OWN,
  ANNOUNCMENT_LIST_REQUEST_OWN,
  ANNOUNCMENT_LIST_SUCCESS_OWN,
} from "./../constants/announcementConstant";

export const readAnnouncementReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ANNOUNCMENT_LIST_REQUEST:
      return { loading: true };
    case ANNOUNCMENT_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case ANNOUNCMENT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const readAnnouncementReducerown = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ANNOUNCMENT_LIST_REQUEST_OWN:
      return { loading: true };
    case ANNOUNCMENT_LIST_SUCCESS_OWN:
      return { loading: false, notes: action.payload };
    case ANNOUNCMENT_LIST_FAIL_OWN:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const setAnnouncementReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ANNOUNCMENT_CREATE_REQUEST:
      return { loading: true };
    case ANNOUNCMENT_CREATE_SUCCESS:
      return { loading: false, notes: action.payload };
    case ANNOUNCMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
