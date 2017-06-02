import {
  SEARCH_FORM_UI_QUERY,
  SEARCH_FORM_UI_STYLE,
  SEARCH_FORM_UI_ORIENTATION,
  SEARCH_FORM_UI_SOURCES,
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
