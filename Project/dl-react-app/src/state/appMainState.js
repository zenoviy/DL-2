import React, { createContext, useReducer } from 'react'

import * as appActions from '../actions/actionsLogic'
import * as ClickReducer from '../reducers/homeReducer'

import FooterComponent from '../Footer/FooterComponent' 
import AppMainNavigation from '../NavigationMain/AppNavigation'


export const Context = createContext(null);
export const AppMainState = props => {
    const [clickCounter, setClickCounter] = useReducer(ClickReducer.HomeReducer, ClickReducer.initialState)

    const clickIncrease = value => {
        setClickCounter(appActions.secondIncrease(value))
    }
    const clickDecreaser = value => {
        setClickCounter(appActions.secondDecrease(value))
    }

    const helloWords = 'Hello React';
    return (
        <Context.Provider value={{
            clickCounter,
            clickIncrease: val => { clickIncrease(val) },
            clickDecreaser: val => { clickDecreaser(val) },
        }}>
            <AppMainNavigation hello={helloWords} />
            <FooterComponent />
        </Context.Provider>
    )
}


