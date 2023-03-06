const loginUrl = process.env.REACT_APP_LOGIN_URL;

export function updateLoginUrl(key, value,secondKey,secondValue) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key,value);
    searchParams.set(secondKey,secondValue);
    const newRelativePathQuery = loginUrl + "?" + searchParams.toString() ;
    return newRelativePathQuery;
}

export function idGenerator() {
    const id = Math.random().toString().split('').slice(2,8).join('');
    return id;
}