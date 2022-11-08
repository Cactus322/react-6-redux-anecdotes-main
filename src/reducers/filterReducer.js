import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: [],
    reducers: {
        filterAnecdotes(state, action) {
            const content = action.payload.filterContent.toLowerCase()
            const anecdotes = action.payload.anecdotes

            return anecdotes.filter(anecdote => {
                if (anecdote.content.toLowerCase().includes(content)) {
                    return anecdote
                }

                return null
            })
        },
    }
})

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer
