import {
  SEARCH_FORM_UI_QUERY,
  SEARCH_FORM_UI_STYLE,
  SEARCH_FORM_UI_ORIENTATION,
  SEARCH_FORM_UI_SOURCES,
  SEARCH_FORM_UI_TOGGLE_FILTERS,
} from '../constants';

const initialState = {
  query: '',
  style: 'photo',
  orientation: 'landscape',
  sources: ['gettyimages', 'shutterstock', 'one23rf'],
  filterStatus: false,
};

export default function updateForm(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_FORM_UI_QUERY:
      return {
        ...state,
        query: payload,
      };
    case SEARCH_FORM_UI_STYLE:
      return {
        ...state,
        style: payload,
      };
    case SEARCH_FORM_UI_ORIENTATION:
      return {
        ...state,
        orientation: payload,
      };
    case SEARCH_FORM_UI_SOURCES:
      return {
        ...state,
        sources: payload,
      };
    case SEARCH_FORM_UI_TOGGLE_FILTERS:
      return {
        ...state,
        filterStatus: payload,
      };
    default:
      return state;
  }
}
