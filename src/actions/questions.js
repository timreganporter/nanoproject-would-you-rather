import { showLoading, hideLoading } from 'react-redux-loading';

import { saveQuestion, saveQuestionAnswer } from '../apis';
import { addAnswerToUser } from '../actions/users';

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const GET_QUESTIONS = 'GET_QUESTIONS';

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
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then( question => {
        dispatch(answerQuestion(info));
        dispatch(addAnswerToUser(info));
       })
      .then(() => dispatch(hideLoading()))
      .catch( err => {
        console.warn('Error in saving answer ', err);
        dispatch(hideLoading());
        alert('There was an error in recording your answer. Please try again.');
      });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      author: authedUser,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  }
}