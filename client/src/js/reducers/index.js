import { combineReducers } from 'redux';

import search from './reducer.search';
import ui from './reducer.ui';

export default combineReducers({
  search,
  ui,
});
