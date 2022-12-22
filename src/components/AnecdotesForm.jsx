import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export const AnecdotesForm = () => {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState('')

	const newAnecdote = async (e) => {
		e.preventDefault()
		dispatch(createAnecdote(inputValue))
		dispatch(setNotification(`Anecdote '${inputValue}' was created`, 3))
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
