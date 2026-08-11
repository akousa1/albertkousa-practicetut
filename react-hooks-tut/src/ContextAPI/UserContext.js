import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user] = useState({ name: "john", age: 30 });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

