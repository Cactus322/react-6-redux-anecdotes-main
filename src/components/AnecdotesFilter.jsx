import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

export const AnecdotesFilter = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector((state) => state.anecdotes)
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        dispatch(
            filterAnecdotes({ filterContent: filterValue, anecdotes: anecdotes })
        )
    }, [filterValue, anecdotes])

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
