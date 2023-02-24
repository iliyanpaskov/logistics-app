
const baseUrl = `${process.env.REACT_APP_CLASSES_URL}`;
console.log(baseUrl);
const getSettings = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id" : `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
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