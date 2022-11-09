import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (anecdoteObject) => {
    return axios.post(baseUrl, anecdoteObject)
}

const anecdoteService = {
    getAll,
    create
}

export default anecdoteService
