import React from 'react'
import { render, screen } from '@testing-library/react'
import AncientList from './index'
import { API_ENDPOINT } from '../../constants'

// TODO: Improve tests, mock an actual response
describe('<AncientsList/>', () => {
    render(<AncientList />)

    test('Renders search form', async () => {
        const searchForm = await screen.findByText('Enter a search term')
        expect(searchForm).toBeInTheDocument()
    })
})
