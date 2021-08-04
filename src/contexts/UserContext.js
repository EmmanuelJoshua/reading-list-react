import React, { useState, useEffect, useReducer, createContext } from 'react'
import { SetUsernameModalReducer } from '../reducers/SetUsernameModalReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData === '' ? '' : localData;
    });

    const [showSetUserModal, userModalDispatch] = useReducer(SetUsernameModalReducer, false);

    useEffect(() => {

        if (!user) {
            localStorage.setItem('user', '');
            userModalDispatch({ type: 'OPEN_MODAL' })
        } else {
            localStorage.setItem('user', user);
        }

    }, [user]);

    return (
        <UserContext.Provider value={{ user, showSetUserModal, setUser, userModalDispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;