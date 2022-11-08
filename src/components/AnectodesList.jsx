import { useSelector, useDispatch } from 'react-redux'
import { votesIncrease } from '../reducers/anecdoteReducer'
import {
    voteAnecdoteNotification,
    deleteNotification,
} from '../reducers/notificationReducer'

export const AnecdotesList = () => {
    const anecdotes = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(votesIncrease(id))
        dispatch(voteAnecdoteNotification(content))
        setTimeout(() => dispatch(deleteNotification()), 5000)
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
                            onClick={() => vote(anecdote.id, anecdote.content)}
                        >
                            vote
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
