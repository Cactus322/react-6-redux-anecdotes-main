import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdotesFilter from './components/AnecdotesFilter'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnectodesList'
import Notification from './components/Notification'
import { initializeAnecdote } from './reducers/anecdoteReducer'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdote())
    }, [dispatch])

    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <AnecdotesFilter />
            <AnecdotesList />
            <AnecdotesForm />

        </div>
    )
}

export default App
