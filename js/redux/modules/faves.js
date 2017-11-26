import { queryFaves } from '../../config/models';
const LOAD_FAVES = 'LOAD_FAVES';

export const loadFaves = (favesData) => ({
  type: LOAD_FAVES,
  payload: favesData
})

export const fetchFaves = () => {
  return (dispatch) => {
    const favesData = queryFaves();
    dispatch(loadFaves(favesData));
  }
}

const initialState = {
  faves:[]
}

export default (state= initialState, action) => {
  switch (action.type){
    case LOAD_FAVES:
      return {
        ...state,
        faves: action.payload
      }
    default:
      return state;
  }
}

