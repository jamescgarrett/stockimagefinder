import {
  SEARCH_FORM_UI_QUERY,
  SEARCH_FORM_UI_STYLE,
  SEARCH_FORM_UI_ORIENTATION,
  SEARCH_FORM_UI_SOURCES,
  SEARCH_FORM_UI_TOGGLE_FILTERS,
} from '../constants';

export const queryChange = value => ({
  type: SEARCH_FORM_UI_QUERY,
  payload: value,
});

export const styleChange = value => ({
  type: SEARCH_FORM_UI_STYLE,
  payload: value,
});

export const orientationChange = value => ({
  type: SEARCH_FORM_UI_ORIENTATION,
  payload: value,
});

export const sourcesChange = values => ({
  type: SEARCH_FORM_UI_SOURCES,
  payload: values,
});

export const toggleFilters = (status) => {
  const s = status ? false : true;
  return {
    type: SEARCH_FORM_UI_TOGGLE_FILTERS,
    payload: s,
  };
};
