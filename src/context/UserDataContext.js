import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataState = ({ children }) => {
    const [userData, setUserData] = useState({});

    const setUserInfo = (data) => {
        setUserData(data);
    }

    const clearUserInfo = () => {
        setUserData({});
    }

    return (
        <UserDataContext.Provider value={{ userData, setUserInfo, clearUserInfo }}>
            {children}
        </UserDataContext.Provider>
    );
}