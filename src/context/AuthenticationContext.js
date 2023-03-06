import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthenticationState = ({children}) => {

    const [user, setUser] = useLocalStorage('authenticated',{
        objectId: null,
        username: null,
        sessionToken: null,

    })

    const loginData = (authenticationData) => {
        setUser(authenticationData);
    }

    const logoutData = () => {
        setUser({
            objectId: null,
            username: null,
            sessionToken: null,
        });
    }

    return (
        <AuthContext.Provider value={{user, loginData, logoutData, isAuthenticated:Boolean(user.sessionToken)}}>
            {children}
        </AuthContext.Provider>
    )

}

