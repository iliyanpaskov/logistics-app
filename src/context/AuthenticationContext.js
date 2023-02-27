import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthenticationContext = ({
    children
}) => {

    const [user, setUser] = useState({
        objectId: null,
        username: null,
        sessionToken: null,

    })

    function loginData(authenticationData) {
        setUser(authenticationData);
    }


    //TODO logooutData


    return (
        <AuthContext.Provider value={{user, loginData, isAuthenticated:Boolean(user.sessionToken)}}>
            {children}
        </AuthContext.Provider>
    )

}

