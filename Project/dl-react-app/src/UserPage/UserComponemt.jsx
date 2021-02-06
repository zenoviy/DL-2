import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../state/appMainState'
import { convertFormToData } from '../business/userWorker'
import './style.css'

const UserPageComponent = props => {
    const context = useContext(Context);
    useEffect(() => {
        context.getAllUsers()
    }, [])
    return(
        <React.Fragment>
            <div className="app-container">
                <h1>Users</h1>
                <h4>Number clicks: { context.clickCounter.secondClickCounter }</h4>
                <div className="user-body-wrapper">
                    <UserForm context={ context } />
                    <UserList allUsers={ context.usersData.allUsers ? context.usersData.allUsers : [] } context={ context }/> 
                </div>
            </div>
        </React.Fragment>
    )
}

const UserForm = props => {
    return(
        <div className="user-form-wrapper">
            <form onSubmit={(e) => { 
                e.preventDefault(); 
                //createUser(e.target, props.setUsers, props.appData);
                const userData = convertFormToData(e.target);
                if(!userData) return

                props.context.postUser(userData)
                e.target.reset();
            }}>
                <label >
                    <p>*User Name</p>
                    <input type="text" name="name" placeholder="user name" required />
                </label>
                <label>
                    <p>*User Email</p>
                    <input type="email" name="email" placeholder="user email" required />
                </label>
                <label>
                    <p>*User Password</p>
                    <input type="password" name="password" placeholder="user password" required />
                </label>
                
                <br></br>
                <input type="submit" value="create user"/>
            </form>
        </div>
            
    )
}


const UserList = props => {
    if(!props.allUsers) return(<h1>Loading...</h1>)
    
    return(
        <div className="user-list-wrapper">
            <ul>
                { props.allUsers.map(user => {
                    const {
                        id,
                        name 
                    } = user;
                    return(
                        <li key={id}>
                            <span>{name}</span>
                            <button onClick={ () =>{ props.context.deleteUser({id}) }}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default UserPageComponent