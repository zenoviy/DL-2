
import { ACTIONS_TYPE } from './actionsType'


export const secondIncrease = (value) => {
    return {
        value,
        type: ACTIONS_TYPE.ICREASE_SECOND_COUNTER
    }
}
export const secondDecrease = (value) => {
    return {
        value: value * -1,
        type: ACTIONS_TYPE.DECREASE_SECOND_COUNTER
    }
}
