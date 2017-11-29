import { formatSessionData } from '../../lib/dataHelpers';

// NAME YOUR ACTIONS
const GET_SESSION_BEGIN = 'GET_SESSION_BEGIN';
const GET_SESSION_SUCCESS = 'GET_SESSION_SUCCESS';
const GET_SESSION_ERROR = 'GET_SESSION_ERROR';

// CREATE SOME ACTION CREATORS
export const getSessionBegin = () => ({
  type: GET_SESSION_BEGIN,
});
export const getSessionSuccess = session => ({
  type: GET_SESSION_SUCCESS,
  payload: session,
});

export const getSessionError = err => ({
  type: GET_SESSION_ERROR,
  error: err,
});

// MAKE AN ASYNC ACTION CREATOR
export const fetchSession = () => (dispatch) => {
  dispatch(getSessionBegin());
  fetch('https://r10app-95fea.firebaseio.com/sessions.json')
    .then(resp => resp.json())
    .then((data) => {
      dispatch(getSessionSuccess(formatSessionData(data)));
    })
    .catch((err) => {
      dispatch(getSessionError(err));
    });
};

// CREATE AND EXPORT YOUR REUCER
const initialState = {
  isLoading: true,
  sessionData: [],
  errorMsg: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SESSION_BEGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_SESSION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        sessionData: action.payload,
      };
    case 'GET_SESSION_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
      };
    default:
      return state;
  }
};
