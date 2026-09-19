import React, { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const user = {
        id: 1,
        name: "Niyati"
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}