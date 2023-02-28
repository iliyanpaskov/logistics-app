export function addToUrl(key, value,s,r) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key,value);
    searchParams.set(s,r);
    const baseUrl = "https://parseapi.back4app.com/login";
    const newRelativePathQuery = baseUrl + "?" + searchParams.toString() ;
    return newRelativePathQuery;
}