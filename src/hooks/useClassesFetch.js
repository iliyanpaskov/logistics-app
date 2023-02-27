import { useEffect, useState } from "react";

export const useClassesFetch = (classeName, method) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CLASSES_URL}/${classeName}`, {
            method,
            headers: {
                "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
                "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
            },
        })
        .then(response => response.json())
        .then(result => {
            setIsLoaded(true)
            setData(Object.values(result));
        })
        .catch(error => {
            throw error
        } )
    }, [classeName,method]);
    return [data , isLoaded];
}

