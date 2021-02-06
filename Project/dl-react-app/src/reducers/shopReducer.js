import { ACTIONS_TYPE } from '../actions/actionsType'
import { itemFinder } from '../business/apiWorkers'


export const initialState = {
    allProducts: null,
    singleProduct: null
}


export const ShopReducer = (state = initialState, payload) => {
    switch(payload.type) {
        case ACTIONS_TYPE.GET_SHOP_DATA: 
            return {
                ...state,
                allProducts: payload.data
            }
        case ACTIONS_TYPE.GET_SINGLE_ITEM:
            return {
                ...state,
                singleProduct: itemFinder({ originData: state.allProducts, id: payload.id})
            }
    }
}
