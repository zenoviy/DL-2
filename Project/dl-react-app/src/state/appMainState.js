import React, { createContext, useReducer } from 'react'
import APP_CONSTANTS from './constants'

import * as appActions from '../actions/actionsLogic'
import * as ClickReducer from '../reducers/homeReducer'
import * as ShopReducer from '../reducers/shopReducer'
import * as UserReducer from '../reducers/userReducer'

import FooterComponent from '../Footer/FooterComponent' 
import AppMainNavigation from '../NavigationMain/AppNavigation'


export const Context = createContext(null);
export const AppMainState = props => {
    const [clickCounter, setClickCounter] = useReducer(ClickReducer.HomeReducer, ClickReducer.initialState);
    const [shopData, setShopData] = useReducer(ShopReducer.ShopReducer, ShopReducer.initialState);
    const [usersData, setUSersData] = useReducer(UserReducer.UserReducer, UserReducer.initialState);

    const clickIncrease = value => {
        setClickCounter(appActions.secondIncrease(value))
    }
    const clickDecreaser = value => {
        setClickCounter(appActions.secondDecrease(value))
    }



    /* Shop */

    const getAllShopData =  () => {
        const shopApilink = APP_CONSTANTS.HOST + APP_CONSTANTS.SHOP_API_ROUT;
        return new Promise((respons, rej) => {
             appActions.shopAllData({
                link: shopApilink
            }).then(async res => {
                await setShopData(res)
                respons(res)
            }, rej => {
                console.log(rej)
            })
        })
    }

    const getShopSingleItem = props => {
        setShopData(appActions.getShopSingleItem(props));

    }


    /* Users  */

    const getAllUsers = () => {
        const usersApilink = APP_CONSTANTS.HOST + APP_CONSTANTS.USER_API_ROUT;
        appActions.getAllUsers({
            link: usersApilink
        }).then(res => {
            setUSersData(res)
        }, rej => {
            console.log(rej)
        })
    }
    const postUser = userData => {
        const usersApilink = APP_CONSTANTS.HOST + APP_CONSTANTS.USER_API_ROUT;
        appActions.postNewUser({
            url: usersApilink,
            body: JSON.stringify(userData)
        }).then(res => {
            getAllUsers()
        })
    }
    const deleteUser = userData => {
        const usersApilink = APP_CONSTANTS.HOST + APP_CONSTANTS.USER_API_ROUT;
        appActions.deleteOneUser({
            url: usersApilink,
            userData
        }).then(res => {
            getAllUsers()
        })
    }

    const helloWords = 'Hello React';
    return (
        <Context.Provider value={{
            clickCounter,
            shopData,
            usersData,
            clickIncrease: val => { clickIncrease(val) },
            clickDecreaser: val => { clickDecreaser(val) },
            getAllShopData: () => { return getAllShopData() },
            getShopSingleItem: props => { getShopSingleItem(props) },
            getAllUsers: () => { getAllUsers() },
            postUser: userData => { postUser(userData) },
            deleteUser: userData => { deleteUser(userData) }
        }}>
            <AppMainNavigation hello={helloWords} />
            <FooterComponent />
        </Context.Provider>
    )
}


