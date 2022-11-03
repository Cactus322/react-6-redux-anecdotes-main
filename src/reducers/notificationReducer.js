import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: '',
    reducers: {
        createAnectodeNotification(state, action) {
            const content = action.payload

            return `Anecdote '${content}' was created`
        },
        voteAnecdoteNotification(state, action) {
            const content = action.payload

            return `You voted '${content}'`
        },
        deleteNotification() {
            return ''
        }
    }
})

export const { createAnectodeNotification, voteAnecdoteNotification, deleteNotification } = notificationSlice.actions
export default notificationSlice.reducer
