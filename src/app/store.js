import { combineReducers, createStore } from 'redux';

import { reducer as userReducer } from 'auth/redux';

const reducer = combineReducers({
  user: userReducer,
});

export default createStore(reducer);
