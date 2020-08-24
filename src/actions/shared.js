import { getInitialData } from '../apis';
import { getQuestions } from './questions';

export function handleInitialData() {
  return (dispatch) => {
    // TODO: show loading
    return getInitialData()
      .then(({ users, questions }) => {
        // TODO: dispatch(getUsers(users))
        dispatch(getQuestions(questions));
      });
  }
}