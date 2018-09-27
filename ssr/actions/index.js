export const INITIALCARDS = 'INITIALCARDS';
export const ADD = 'ADD';
import data from '../data/data.json'

export const initialCardsAction = () => {
    return dispatch => {
        dispatch({
            type: INITIALCARDS,
            payload: data
        })
    }
}

export const AddAction = () => {
    return dispatch => {
        dispatch({
            type: ADD,
            payload: "DON'T USE THIS ACTION"
        })
    }
}