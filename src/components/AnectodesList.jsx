import { connect } from 'react-redux'
import { votesIncrease } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
	const anecdotes = props.filter

	const vote = (anecdote, content) => {
		props.votesIncrease(anecdote)
		props.setNotification(`You voted '${content}'`, 3)
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

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
	}
}

const mapDispatchToProps = {
	setNotification,
	votesIncrease,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdotesList)