import { REMOVE_AUTHED_USER, SET_AUTHED_USER } from '../actions/authedUser.js';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case REMOVE_AUTHED_USER:
      return null;
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}