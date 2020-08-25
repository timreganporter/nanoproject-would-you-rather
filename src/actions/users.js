export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function addAnswerToUser({ answer, authedUser, qid }) {
  return {
    type: ADD_ANSWER_TO_USER,
    answer,
    authedUser,
    qid
  }
}