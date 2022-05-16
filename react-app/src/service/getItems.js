export const getItems = async () => {
    const url= '/api/get'
    const response= await fetch(url);

    return response;
}