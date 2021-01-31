export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const BACKEND_URL = 'https://spidersdotcobackend.herokuapp.com/'