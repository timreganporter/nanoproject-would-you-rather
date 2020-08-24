import { getInitialData } from '../apis';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function handleInitialData() {
  return (dispatch) => {
    // TODO: show loading
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      });
  }
}