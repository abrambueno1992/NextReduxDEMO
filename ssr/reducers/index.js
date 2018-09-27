import {ADD, INITIALCARDS} from '../actions';

const startState = {
    cards: [],
    add: ''
}
const reducer = (state = startState, action) => {
    switch (action.type) {
        case INITIALCARDS:
            return {
                cards: action.payload,
            }
        case ADD:
            return {
                ...state,
                add: action.payload
            }
        default: 
            return state
    }
}

export default reducer