
const baseUrl = "https://parseapi.back4app.com/classes";

const getSettings = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id" : "mmiJjV5bLwaTJXMktq7zHjB637Ml1maDGfmdTiuZ",
        "X-Parse-REST-API-Key": "rlKrIGD7HJ5bJOJ5KPOlObKogSzKz5J2EU7z3nZe",
    }
}

export async function getData(classesName) {
    try {
        const res = await fetch(`${baseUrl}/${classesName}`, getSettings );
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}