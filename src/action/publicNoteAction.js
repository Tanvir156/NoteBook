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
  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
  PUBLIC_NOTES_LIST_REQUEST,
  PUBLIC_NOTES_LIST_SUCCESS,
} from "../constants/publicNoteConstant";
import axios from "axios";

export const listPublicNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PUBLIC_NOTES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes`, config);

    dispatch({
      type: PUBLIC_NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PUBLIC_NOTES_LIST_FAIL,
      payload: message,
    });
  }
};
export const listPublicNotesOwn = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PUBLIC_NOTES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes/own`, config);

    dispatch({
      type: PUBLIC_NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PUBLIC_NOTES_LIST_FAIL,
      payload: message,
    });
  }
};

export const createPublicNoteAction =
  (name, userr, caption, pic, shortImage) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PUBLIC_NOTES_CREATE_REQUEST,
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
        `https://feelfreetopost-api.onrender.com/api/publicnotes`,
        { name, userr, caption, pic, shortImage },
        config
      );

      dispatch({
        type: PUBLIC_NOTES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PUBLIC_NOTES_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deletePublicNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PUBLIC_NOTES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes/own/${id}`,
      config
    );

    dispatch({
      type: PUBLIC_NOTES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PUBLIC_NOTES_DELETE_FAIL,
      payload: message,
    });
  }
};

export const navigateProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes/own/profile/${id}`,
      config
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_PROFILE_FAIL,
      payload: message,
    });
  }
};
