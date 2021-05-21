import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_ENDPOINT_SEARCH } from '../../constants'
import List from '../AncientsList/List'

const Wrapper = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const Input = styled.input`
    padding: 5px 15px;
`

const Submit = styled.button`
    font-family: var(--font-special);
    font-size: 1.2rem;
    padding: 5px 20px;
    cursor: pointer;
`

interface Props {
    text?: string
    onSearchChange: Dispatch<SetStateAction<string | undefined>>
}

const Search: React.FC<Props> = ({ text, onSearchChange }) => {
    const [query, setQuery] = useState<string | undefined>(text)
    const [data, setData] = useState()
    const [url, setUrl] = useState<string | null>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Grab the data from the endpoint and get the JSON
                const response = await fetch(url!)
                const json = await response.json()
                // Store the JSON in state
                setData(json.ancients)
            } catch (err) {
                // setError(true)
            }
        }

        if (url) {
            fetchData()
        }
    }, [url])

    return (
        <>
            <Wrapper
                onSubmit={(event) => {
                    event.preventDefault()
                    setUrl(`${API_ENDPOINT_SEARCH}${query}`)
                    onSearchChange(query)
                }}
            >
                <label htmlFor="search" className="visually-hidden">
                    Enter a search term
                </label>
                <Input
                    type="text"
                    placeholder="Zeus"
                    name="search"
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Submit type="submit">Search</Submit>
            </Wrapper>

            {data && <List data={data!} />}
        </>
    )
}

export default Search
