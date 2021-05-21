import { API_ENDPOINT } from '../../constants'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListCard from './ListCard'
import Loader from '../Loader'

const List = styled.ul`
    list-style: none;
    // reset default ul padding and margin
    margin: 0;
    padding: 0;
`

export interface DataItem {
    name: string
    superpower: string
    end_of_an_era: Date
}

const AncientList: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([])
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [error, setError] = useState<Boolean>(false)

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

    return (
        <>
            {error && <div>We got an error!</div>}

            {isLoading ? (
                <Loader />
            ) : (
                <List>
                    {data.map((item, index: number) => {
                        const { name, end_of_an_era, superpower } = item
                        return (
                            <ListCard
                                key={index}
                                // Displayed uppercase as per requirements - without using CSS transform
                                name={name.toUpperCase()}
                                superpower={superpower.toUpperCase()}
                                end_of_an_era={end_of_an_era}
                            />
                        )
                    })}
                </List>
            )}
        </>
    )
}

export default AncientList
