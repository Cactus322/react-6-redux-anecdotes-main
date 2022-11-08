import { AnecdotesFilter } from './components/AnecdotesFilter'
import { AnecdotesForm } from './components/AnecdotesForm'
import { AnecdotesList } from './components/AnectodesList'
import Notification from './components/Notification'

const App = () => {
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
