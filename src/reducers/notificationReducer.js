import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notifications',
	initialState: '',
	reducers: {
		createNotification(state, action) {
			return action.payload
		},
		removeNotification() {
			return ''
		},
	},
})

export const {
	removeNotification,
	createNotification,
} = notificationSlice.actions

export const setNotification = (notification, removeTimeout) => {
	return async (dispatch) => {
		const removeTimeoutMsec = removeTimeout * 1000

		window.clearTimeout()
		dispatch(createNotification(notification))
		setTimeout(() => dispatch(removeNotification()), removeTimeoutMsec)
	}
}

export default notificationSlice.reducer
