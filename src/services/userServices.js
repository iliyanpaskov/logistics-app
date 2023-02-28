

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

