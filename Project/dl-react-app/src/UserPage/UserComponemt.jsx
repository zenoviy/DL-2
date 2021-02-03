import React, { useContext } from 'react'
import { Context } from '../state/appMainState'

const UserPageComponent = props => {
    const context = useContext(Context);

    return(
        <React.Fragment>
            <div className="app-container">
                <h1>Users</h1>
                <h4>Number clicks: { context.clickCounter.secondClickCounter }</h4>
            </div>
        </React.Fragment>
    )
}

export default UserPageComponent