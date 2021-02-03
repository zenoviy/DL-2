import { ACTIONS_TYPE } from '../actions/actionsType'


export const initialState = {
    secondClickCounter: 0
}


export const HomeReducer = (state = initialState, payload) => {
    switch(payload.type) {
        case ACTIONS_TYPE.ICREASE_SECOND_COUNTER: 
            return {
                ...state,
                secondClickCounter: state.secondClickCounter + payload.value
            }
        case ACTIONS_TYPE.DECREASE_SECOND_COUNTER: 
            return {
                ...state,
                secondClickCounter: state.secondClickCounter + payload.value
            }
    }
}