import { formatDataObject } from "../../lib/dataHelpers";
// Name your actions
const GET_SPEAKER_BEGIN = "GET_SPEAKER_BEGIN";
const GET_SPEAKER_SUCCESS = "GET_SPEAKER_SUCCESS";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";

// Create some action creators

export const getSpeakerBegin = () => ({
    type: GET_SPEAKER_BEGIN
});

export const getSpeakerSuccess = speaker => ({
    type: GET_SPEAKER_SUCCESS,
    payload: speaker
});

export const getSpeakerError = err => ({
    type: GET_SPEAKER_ERROR,
    error: err
});

// Make an async action creator
export const fetchSpeaker = speakerID => {
    return dispatch => {
        dispatch(getSpeakerBegin());
        fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`)
            .then(resp => resp.json())
            .then(data => {
                dispatch(getSpeakerSuccess(formatDataObject(data)));
            })
            .catch(err => {
                dispatch(getSpeakerError(err));
            });
    };
};

// Create and export your reducers

const initialState = {
    isLoading: false,
    singleSpeaker: {},
    errorMsg: ""
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_SPEAKER_BEGIN":
            return {
                ...state,
                isLoading: true
            };
        case "GET_SPEAKER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                singleSpeaker: action.payload
            };
        case "GET_SPEAKER_ERROR":
            return {
                ...state,
                isLoading: false,
                errorMsg: action.error
            };
        default:
            return state;
    }
};
