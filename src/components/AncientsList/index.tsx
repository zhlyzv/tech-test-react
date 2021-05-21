import React, { useState } from 'react'
import useSWR from 'swr'
import { API_ENDPOINT, API_ENDPOINT_ERROR, API_ENDPOINT_SEARCH } from '../../constants'
import Loader from '../ui/Loader'
import Input from '../ui/Input'
import SearchForm from '../ui/SearchForm'
import SubmitBtn from '../ui/SubmitBtn'
import List from './List'

export interface Item {
    name: string
    superpower: string
    end_of_an_era: string
}

const AncientList: React.FC = () => {
    const [query, setQuery] = useState<string>('')
    const [searchUrl, setSearchUrl] = useState<string | null>()

    // Fetch the initial data from the /ancients.json endpoint
    const { data: initialData, error: initialError } = useSWR<Item[]>(API_ENDPOINT)
    // Fetch the search data from the /ancients.json?search=foo endpoint
    // Only happens if we submitted the search form
    const { data: searchData, error: searchError } = useSWR<{ ancients: Item[] }>(
        searchUrl ? searchUrl : null
    )
    // Make a request to the /ancients.json?error=true endpoint
    // This ONLY happens if we have had an error fetching either the search or the initial data
    // It wasn't too clear from the requirements if we shou always display this or not,
    // however always displaying an error message is a bit silly.
    const { data: errorData } = useSWR<{ error: string }>(
        initialError || searchError ? API_ENDPOINT_ERROR : null
    )

    let dataToDisplay =
        // Have a search query saved and we've made a request for search data? -> display it
        // TODO: Bit of a bug here - If we clear the search query, initial data is displayed as expected
        // However, upon entering the first character of a new search query, the previous search result is returned due to the new search not being submitted.
        query && searchData ? (
            <List data={searchData.ancients} />
        ) : // Otherwise, we want to display the initial fetch data
        initialData ? (
            <List data={initialData} />
        ) : (
            // Neither of these available? We're loading
            <Loader />
        )

    // Got a error? make a request to the /ancients.json?error=true endpoint and display it
    if (errorData) {
        dataToDisplay = <div>{errorData.error}</div>
    }

    return (
        <>
            <SearchForm
                onSubmit={(event) => {
                    event.preventDefault()
                    if (query) {
                        setSearchUrl(`${API_ENDPOINT_SEARCH}${query}`)
                    }
                }}
            >
                <label htmlFor="search" className="visually-hidden">
                    Enter a search term
                </label>
                <Input
                    type="text"
                    placeholder="Zeus"
                    name="search"
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                />
                <SubmitBtn type="submit">Search</SubmitBtn>
            </SearchForm>

            {dataToDisplay}
        </>
    )
}

export default AncientList
