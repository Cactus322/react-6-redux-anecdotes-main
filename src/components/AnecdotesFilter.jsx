import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const AnecdotesFilter = (props) => {
	const anecdotes = props.anecdotes
	const [filterValue, setFilterValue] = useState('')

	useEffect(() => {
		props.filterAnecdotes({
			filterContent: filterValue,
			anecdotes: anecdotes,
		})
	}, [filterValue, anecdotes, props])

	const handleChange = (e) => {
		setFilterValue(e.target.value)
	}

	return (
		<>
			<label>filter </label>
			<input value={filterValue} onChange={handleChange}></input>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
	}
}

const mapDispatchToProps = {
	filterAnecdotes,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdotesFilter)
