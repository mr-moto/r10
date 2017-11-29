const GET_CONDUCT = 'GET_CONDUCT';


const getConduct = conduct => ({ type: GET_CONDUCT, payload: conduct });


export const fetchConduct = () =>
  dispatch =>
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      .then(response => response.json())
      .then(conduct => dispatch(getConduct(conduct)));


const initialState = {
  isLoading: true,
  conductData: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONDUCT':
      return {
        ...state,
        isLoading: false,
        conductData: action.payload,
      };
    default:
      return state;
  }
};
