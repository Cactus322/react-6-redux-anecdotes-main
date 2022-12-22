import { useState } from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesForm = (props) => {
	const [inputValue, setInputValue] = useState('')

	const newAnecdote = async (e) => {
		e.preventDefault()
		props.createAnecdote(inputValue)
		props.setNotification(`Anecdote '${inputValue}' was created`, 3)
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

const mapDispatchToProps = {
	createAnecdote,
	setNotification,
}

export default connect(null, mapDispatchToProps)(AnecdotesForm)
