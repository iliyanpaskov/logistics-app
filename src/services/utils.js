const loginUrl = process.env.REACT_APP_LOGIN_URL;

export function addToUrl(key, value,secondKey,secondValue) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key,value);
    searchParams.set(secondKey,secondValue);
    const newRelativePathQuery = loginUrl + "?" + searchParams.toString() ;
    return newRelativePathQuery;
}