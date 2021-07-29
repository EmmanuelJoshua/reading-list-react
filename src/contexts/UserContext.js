import React, { useState, createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : [];
    });

    // const [show, setShow] = useState(false);

    // const openModal = () => {
    //     setShow(true)
    // }

    // const closeModal = () => {
    //     setShow(false);
    // }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;