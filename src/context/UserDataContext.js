import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataState = ({ children }) => {
    const [userData, setUserData] = useState({
        username: null,
        email: null,
        password: null,
        fullName: null,
        address: null,
        phone: null,
        myOrders: [],
    });

    const setUserInfo = (data) => {
        setUserData(data);
    }

    const clearUserInfo = () => {
        setUserData({
            username: null,
            email: null,
            fullName: null,
            address: null,
            phone: null,
            myOrders: [],
        });
    }

    return (
        <UserDataContext.Provider value={{ userData, setUserInfo, clearUserInfo }}>
            {children}
        </UserDataContext.Provider>
    );
}