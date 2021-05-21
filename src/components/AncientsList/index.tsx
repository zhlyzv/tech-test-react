import { API_ENDPOINT } from '../../constants'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import List from './List'
import Search from '../Search'

export interface Item {
    name: string
    superpower: string
    end_of_an_era: string
}

const AncientList: React.FC = () => {
    const [data, setData] = useState<Item[]>([])
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [error, setError] = useState<Boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)

    // Only run the data fetch once and set it in the state
    useEffect(() => {
        const fetchData = async () => {
            setError(false)
            // Loading data, show indicator
            setLoading(true)

            try {
                // Grab the data from the endpoint and get the JSON
                const response = await fetch(API_ENDPOINT)
                const json = await response.json()
                console.log('initial data', json)
                // Store the JSON in state
                setData(json)
            } catch (err) {
                setError(true)
            }

            // Done, display data
            setLoading(false)
        }

        fetchData()
    }, [])

    if (searchTerm) {
        return <Search onSearchChange={setSearchTerm} text={searchTerm} />
    }

    return (
        <>
            <Search onSearchChange={setSearchTerm} text={searchTerm} />

            {error && <div>We got an error!</div>}

            {isLoading ? <Loader /> : <List data={data} />}
        </>
    )
}

export default AncientList
