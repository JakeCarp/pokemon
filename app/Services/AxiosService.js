

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})

export const sandboxApi = axios.create({
    baseURl: 'https://bcw-sandbox.herokuapp.com/api/jakeC/pokemon'
})