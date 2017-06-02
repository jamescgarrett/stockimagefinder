import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';

import reducers from '../reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    persistState(
      window.location.href.match(/[?&]debug_session=([^&#]+)\b/),
    ),
  );

  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );

  return store;
}
