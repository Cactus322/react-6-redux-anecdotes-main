import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../reducers/actions'

export const AnecdotesForm = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const newAnecdote = (e) => {
        e.preventDefault()
        dispatch(actions.createAnecdote(inputValue))
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <h2>create new</h2>
            <form>
                <div>
                    <input value={inputValue} onChange={handleChange} />
                </div>
                <button onClick={newAnecdote}>create</button>
            </form>
        </>
    )
}
