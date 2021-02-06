
import { ACTIONS_TYPE } from './actionsType'
import { getData, postData, deleteUser } from '../business/apiWorkers'


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



/* Shop Logic */
export const shopAllData = (props) => {
    return new Promise((resolve, reject) => {
        getData({ url: props.link})
        .then(data => data.json())
        .then(data => {
            resolve({
                data: data.dataBody,
                type: ACTIONS_TYPE.GET_SHOP_DATA
            });
        }).catch(err => {
            reject(`Error has been occured: ${err}`);
        })
    })
}
export const getShopSingleItem = (props) => {
    return {
        type: ACTIONS_TYPE.GET_SINGLE_ITEM,
        id: props.id
    }
}


/* users  */
export const getAllUsers = props => {
    return new Promise((resolve, reject) => {
        getData({ url: props.link})
        .then(data => data.json())
        .then(data => {
            console.log(data)
            resolve({
                data: data.body,
                type: ACTIONS_TYPE.GET_ALL_USERS
            });
        }).catch(err => {
            reject(`Error has been occured: ${err}`);
        })
    })
}


export const postNewUser = props => {
    return new Promise((resolve, reject) => {
        postData(props)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            resolve({
                data: data.body,
                type: ACTIONS_TYPE.POST_NEW_USER
            });
        }).catch(err => {
            reject(`Error has been occured: ${err}`);
        })
    })
} 


export const deleteOneUser = props => {
    return new Promise((resolve, reject) => {
        props.headers = {"user-id" : props.userData.id}
        deleteUser(props)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            resolve({
                data: data.body,
                type: ACTIONS_TYPE.DELETE_USER
            });
        }).catch(err => {
            reject(`Error has been occured: ${err}`);
        })
    })
}