import { createSlice } from '@reduxjs/toolkit'

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
		createNotification(state, action) {
			return action.payload
		},
		removeNotification() {
			return ''
		},
	},
})

export const {
	createAnectodeNotification,
	voteAnecdoteNotification,
	removeNotification,
	createNotification,
} = notificationSlice.actions

export const setNotification = (notification, removeTimeout) => {
	return async (dispatch) => {
		const removeTimeoutMsec = removeTimeout * 1000

		dispatch(createNotification(notification))
		setTimeout(() => dispatch(removeNotification()), removeTimeoutMsec)
	}
}

export default notificationSlice.reducer
