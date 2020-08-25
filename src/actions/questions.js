import { saveQuestionAnswer } from '../apis';
import { addAnswerToUser } from '../actions/users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

function answerQuestion({ qid, authedUser, answer }) {
  return {
    type: ANSWER_QUESTION,
    answer,
    authedUser,
    qid
  }
}

export function handleAnswerQuestion(info) {
  return dispatch => {
    // TODO: show loading
    return saveQuestionAnswer(info)
      .then( question => {
        dispatch(answerQuestion(info));
        dispatch(addAnswerToUser(info));
       })
      .catch( err => {
        console.warn('Error in saving answer ', err);
        alert('There was an error in recording your answer. Please try again.');
      });
  };
}