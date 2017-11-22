// NAME YOUR ACTIONS
// const GET_CONDUCT_LOADING = "GET_CONDUCT_LOADING";
// const GET_CONDUCT_ERROR = "GET_CONDUCT_ERROR";
const GET_CONDUCT = "GET_CONDUCT";

// CREATE SOME ACTION CREATORS
// const getConductLoading = () => ({ type: GET_CONDUCT_LOADING });
// const getConductError = error => ({ type: GET_CONDUCT_ERROR, payload: error });
const getConduct = conduct => ({ type: GET_CONDUCT, payload: conduct });

// MAKE AN ASYNC ACTION CREATOR
export const fetchConduct = () => {
    // dispatch(getConductLoading());
    return dispatch => fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
        .then(response => response.json())
        .then(conduct => dispatch(getConduct(conduct)))
        // .catch(error => dispatch(getConductError(error)));
};

// CREATE AND EXPORT YOUR REUCER
const initialState = {
    isLoading: true,
    conductData: [],
    // error: ""
};
export default (state = initialState, action) => {
    switch (action.type) {
        // case "GET_CONDUCT_LOADING":
        //     return {
        //         ...state,
        //         isLoading: true,
        //         error: ""
        //     };
        // case "GET_CONDUCT_ERROR":
        //     return {
        //         ...state,
        //         isloading: false,
        //         error: action.payload
        //     };
        case "GET_CONDUCT":
            return {
                ...state,
                isLoading: false,
                conductData: action.payload,
                // error: ""
            };
        default:
            return state;
    }
};
