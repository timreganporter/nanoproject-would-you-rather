import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData } from '../apis';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(hideLoading());
      });
  }
}