import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (anecdoteObject) => {
    return axios.post(baseUrl, anecdoteObject)
}

const vote = (id, anecdoteNewVote) => {
    return axios.put(`${baseUrl}/${id}`, anecdoteNewVote)
}

const anecdoteService = {
    getAll,
    create,
    vote
}

export default anecdoteService
