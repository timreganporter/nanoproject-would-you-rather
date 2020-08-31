import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import authedUser from './authedUser';
import questions from './questions';
import flashMessages from './flashMessages';
import users from './users';

export default combineReducers({
  authedUser,
  flashMessages,
  loadingBar: loadingBarReducer,
  questions,
  users
});