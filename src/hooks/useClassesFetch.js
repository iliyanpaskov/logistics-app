import { useEffect, useState } from "react";

export const useFetchClasses = (classeName, method) => {
    const [data, setData] = useState([]);

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
                setData(Object.values(result));
            })
    }, [classeName]);
    return data;
}

