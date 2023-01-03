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

import axios from "axios";
export const AnnouncmentListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANNOUNCMENT_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://feelfreetopost-api.onrender.com/api/announcement/get`, config);

    dispatch({
      type: ANNOUNCMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ANNOUNCMENT_LIST_FAIL,
      payload: message,
    });
  }
};

export const createAnnouncmentAction =
  (name, session, course, date, stime, etime, message, corx) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ANNOUNCMENT_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `https://feelfreetopost-api.onrender.com/api/announcement/create`,
        { name, session, course, date, stime, etime, message, corx },
        config
      );

      dispatch({
        type: ANNOUNCMENT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ANNOUNCMENT_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const AnnouncmentListActionOwn = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANNOUNCMENT_LIST_REQUEST_OWN,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://feelfreetopost-api.onrender.com/api/announcement/get/own`, config);

    dispatch({
      type: ANNOUNCMENT_LIST_SUCCESS_OWN,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ANNOUNCMENT_LIST_FAIL_OWN,
      payload: message,
    });
  }
};
