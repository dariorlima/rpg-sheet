import characterState from "./states/characterState"
import  * as types  from '@redux/constants/character';

const initialState = characterState;

function characterReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_CHARACTERS:
            return {
                ...state,
                ...action.payload
            }
        case types.UDPATE_CHARACTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default characterReducer;