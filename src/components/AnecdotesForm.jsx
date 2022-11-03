import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createAnectodeNotification, deleteNotification } from '../reducers/notificationReducer'

export const AnecdotesForm = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const newAnecdote = (e) => {
        e.preventDefault()
        dispatch(createAnecdote(inputValue))
        dispatch(createAnectodeNotification(inputValue))
        setTimeout(() => dispatch(deleteNotification()), 5000)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <h2>create new</h2>
            <form>
                <div>
                    <input value={inputValue} onChange={handleChange} />
                </div>
                <button onClick={newAnecdote}>create</button>
            </form>
        </>
    )
}
