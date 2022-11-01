import { AnecdotesForm } from './components/AnecdotesForm'
import { AnecdotesList } from './components/AnectodesList'

const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdotesForm />
            <AnecdotesList />
        </div>
    )
}

export default App
