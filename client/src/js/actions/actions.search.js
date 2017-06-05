import fetch from 'isomorphic-fetch';

import { checkHttpStatus, parseJSON } from '../utils';
import {
    SEARCH_REQUEST,
    SEARCH_REQUEST_FAILURE,
    SEARCH_REQUEST_SUCCESS,
    GET_REQUEST,
    GET_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS,
} from '../constants';

const APIPATH = 'http://localhost:8000/search';

// POST Request
export const postRequest = () => ({
  type: SEARCH_REQUEST,
});

// POST Request Success
export const postRequestSuccess = data => ({
  type: SEARCH_REQUEST_SUCCESS,
  payload: data,
});

// POST Request Failure
export const postRequestFailure = error => ({
  type: SEARCH_REQUEST_FAILURE,
  payload: {
    error: error.error,
  },
});

// Initiate POST request
export const post = data => (dispatch) => {
  dispatch(postRequest());
  return fetch(APIPATH, {
    method: 'POST',
    mode: 'cors',
    body: data,
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then((response) => {
    console.log(response);
    dispatch(postRequestSuccess(response));
  })
  .catch((err) => {
    console.log(err);
    dispatch(postRequestFailure({
      error: err.message,
    }));
  });
};

export const getRequest = () => ({
  type: GET_REQUEST,
});

export const getRequestSuccess = data => ({
  type: GET_REQUEST_SUCCESS,
  payload: data,
});

export const getRequestFailure = error => ({
  type: GET_REQUEST_FAILURE,
  payload: {
    error: error.error,
  },
});

export const get = data => (dispatch) => {
  dispatch(getRequest());
  return fetch(APIPATH + data, {
    method: 'GET',
    mode: 'cors',
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then((response) => {
    dispatch(getRequestSuccess(response));
  })
  .catch((err) => {
    dispatch(getRequestFailure({
      error: err.message,
    }));
  });
};
