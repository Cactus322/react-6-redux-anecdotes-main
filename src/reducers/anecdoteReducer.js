import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import anecdoteService from '../services/anecdoteService'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        // votesIncrease(state, action) {
        //     const id = action.payload
        //     const voteToChange = state.find((v) => v.id === id)
        //     const changedVote = {
        //         ...voteToChange,
        //         votes: (voteToChange.votes += 1),
        //     }

        //     return state.forEach((anecdote) =>
        //         anecdote.id !== id ? anecdote : changedVote
        //     )
        // },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        },
        voteAnecdote(state, action) {
            const id = action.payload.id
            const changedVote = action.payload
            console.log(action, id)

            return state.forEach((anecdote) =>
                anecdote.id !== id ? anecdote : changedVote
            )
        },
    },
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } =
    anecdoteSlice.actions

export const initializeAnecdote = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes.data))
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.create({
            content: content,
            votes: 0,
            id: nanoid(),
        })
        dispatch(appendAnecdote(newAnecdote.data))
    }
}

export const votesIncrease = (anecdote) => {
    return async (dispatch) => {
        const changeVote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }
        await anecdoteService.vote(anecdote.id, changeVote)
        dispatch(voteAnecdote(changeVote))
    }
}

export default anecdoteSlice.reducer
