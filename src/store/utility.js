export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const BACKEND_URL = 'https://spidersdotcobackend.herokuapp.com/'
// export const BACKEND_URL = 'http://127.0.0.1:8000/'