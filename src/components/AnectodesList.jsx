import { useSelector, useDispatch } from 'react-redux'
import actions from '../reducers/actions'

export const AnecdotesList = () => {
    const anecdotes = useSelector((state) => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(actions.votesIncrease(id))
    }

    anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1))

    return (
        <>
            {anecdotes.map((anecdote) => (
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
