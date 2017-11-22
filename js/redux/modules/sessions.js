// NAME YOUR ACTIONS
const GET_SESSION = "GET_SESSION";

// CREATE SOME ACTION CREATORS
const getSession = session => ({ type: GET_SESSION, payload: session });

// MAKE AN ASYNC ACTION CREATOR
export const fetchSession = () => {
    return dispatch =>
        fetch("https://r10app-95fea.firebaseio.com/sessions.json")
            .then(response => response.json())
            .then(session => dispatch(getSession(session)));
};

// CREATE AND EXPORT YOUR REUCER
const initialState = {
    isLoading: true,
    sessionData: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_SESSION":
            return {
                ...state,
                isLoading: false,
                sessionData: action.payload
            };
        default:
            return state;
    }
};
