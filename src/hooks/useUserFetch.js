import { useEffect, useState  } from "react";

export function useUserFetch (userId) {
    const [state, setState] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SIGN_UP_URL}/${userId}`,{
            method:"GET",
            headers:{
                "X-Parse-Application-Id":"mmiJjV5bLwaTJXMktq7zHjB637Ml1maDGfmdTiuZ",
                "X-Parse-REST-API-Key":"rlKrIGD7HJ5bJOJ5KPOlObKogSzKz5J2EU7z3nZe"
            }
        })
        .then (res => res.json())
        .then (result => {
            setState(result);
            setIsLoaded(true);
        })
        .catch (error => {
            throw error
        })

    },[userId])
    return [state,isLoaded]
}