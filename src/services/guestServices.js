import { errorNotification, successNotification } from "./notificationServices";

const baseUrl = `${process.env.REACT_APP_CLASSES_URL}`;

const getSettings = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    }
}

export async function getOne(className,objectId) {
    try {
        const res = await fetch(`${baseUrl}/${className}/${objectId}`, getSettings);
        const data = await res.json();
        if(!data.error){
            return data;
        }else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
}

export async function sendMessage(values) {
    try {
        const res = await fetch(`${baseUrl}/messages`, {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
                "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });
        const data = await res.json();
        if (!data.error) {
            successNotification('Your message was sent successfully! We will contact you shortly !')
            return data;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
}

