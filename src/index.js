import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import anecdotesReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        anecdotes: anecdotesReducer,
        notification: notificationReducer,
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
