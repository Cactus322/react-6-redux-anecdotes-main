import { nanoid } from 'nanoid'

const votesIncrease = (id) => {
    return {
        type: 'VOTE',
        id: id,
    }
}

const createAnecdote = (content) => {
    return {
        type: 'CREATE',
        data: { content: content, votes: 0, id: nanoid() },
    }
}

const actions = {
    votesIncrease,
    createAnecdote
}

export default actions 