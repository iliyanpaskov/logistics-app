const signUpUrl = process.env.REACT_APP_SIGN_UP_URL;

export async function login(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": "mmiJjV5bLwaTJXMktq7zHjB637Ml1maDGfmdTiuZ",
                "X-Parse-REST-API-Key": "rlKrIGD7HJ5bJOJ5KPOlObKogSzKz5J2EU7z3nZe",
                "X-Parse-Revocable-Session": 1,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
}

export async function signUp(values) {
    try {
        let response = await fetch(signUpUrl, {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "mmiJjV5bLwaTJXMktq7zHjB637Ml1maDGfmdTiuZ",
                "X-Parse-REST-API-Key": "rlKrIGD7HJ5bJOJ5KPOlObKogSzKz5J2EU7z3nZe",
                "X-Parse-Revocable-Session": 1,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        let data = response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

