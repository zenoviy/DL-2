import { ACTIONS_TYPE } from '../actions/actionsType'
import { itemFinder } from '../business/apiWorkers'


export const initialState = {
    allUsers: null
}


export const UserReducer = (state = initialState, payload) => {
    switch(payload.type) {
        case ACTIONS_TYPE.GET_ALL_USERS: 
            return {
                ...state,
                allUsers: payload.data
            }
        case ACTIONS_TYPE.POST_NEW_USER:
            return {
                ...state
            }
        case ACTIONS_TYPE.DELETE_USER: 
            return state
    }
}
