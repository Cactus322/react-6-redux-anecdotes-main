import { useSelector, useDispatch } from 'react-redux'
import { votesIncrease } from '../reducers/anecdoteReducer'

export const AnecdotesList = () => {
    const anecdotes = useSelector((state) => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(votesIncrease(id))
    }

    const anecdotesSort = [...anecdotes].sort((a, b) => (a.votes > b.votes ? -1 : 1))

    return (
        <>
            {anecdotesSort.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    )
}