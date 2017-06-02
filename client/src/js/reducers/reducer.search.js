import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_FAILURE,
  SEARCH_REQUEST_SUCCESS,
  GET_REQUEST,
  GET_REQUEST_FAILURE,
  GET_REQUEST_SUCCESS,
} from '../constants';

const initialState = {
  results: null,
  isLoading: false,
  error: '',
  success: '',
};

export default function search(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SEARCH_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
        results: null,
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        results: payload,
        isLoading: false,
        error: '',
      };
    case GET_REQUEST:
      return {
        ...state,
        error: '',
      };
    case GET_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        success: payload,
        error: '',
      };
    default:
      return state;
  }
}
