export const request = () => {
    return fetch('https://swapi.dev/api/people/')
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} - ${res.statusText}`)
        }
        return res.json()
    })
}
