import { AnecdotesForm } from './components/AnecdotesForm'
import { AnecdotesList } from './components/AnectodesList'
import Notification from './components/Notification'

const App = () => {
    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <AnecdotesForm />
            <AnecdotesList />
        </div>
    )
}

export default App
