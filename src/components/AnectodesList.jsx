import { useSelector, useDispatch } from 'react-redux'
import { votesIncrease } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export const AnecdotesList = () => {
	const anecdotes = useSelector((state) => state.filter)
	const dispatch = useDispatch()

	const vote = (anecdote, content) => {
		dispatch(votesIncrease(anecdote))
		dispatch(setNotification(`You voted '${content}'`, 3))
	}

	const anecdotesSort = [...anecdotes].sort((a, b) =>
		a.votes > b.votes ? -1 : 1
	)

	return (
		<>
			{anecdotesSort.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button
							onClick={() => vote(anecdote, anecdote.content)}
						>
							vote
						</button>
					</div>
				</div>
			))}
		</>
	)
}
