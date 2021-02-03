import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import './style.css'


import HomePageComponent from '../HomePage/HomePageComponent'
import AboutPageComponent from '../AboutPage/AboutPageComponent'
import ShopPageComponent from '../ShopPage/ShopPageMainComponent'
import UserPageComponent from '../UserPage/UserComponemt'
import NotFoundPageComponent from '../NotFoundPage/NotFoundPageComponent'


const AppMainNavigation = props => {
    return(
        <React.Fragment>
            <Router>
                <div className='main-app-menu'>
                    <nav className="app-container">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-page" activeClassName="active-link">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop-page" activeClassName="active-link">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user-page" activeClassName="active-link">Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/">
                        <HomePageComponent hello={props.hello}/>
                    </Route>
                    <Route exact path="/about-page">
                        <AboutPageComponent />
                    </Route>
                    <Route exact path="/shop-page">
                        <ShopPageComponent />
                    </Route>
                    <Route exact path="/user-page">
                        <UserPageComponent />
                    </Route>
                    <Route exact path="*">
                        <NotFoundPageComponent />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}


export default AppMainNavigation