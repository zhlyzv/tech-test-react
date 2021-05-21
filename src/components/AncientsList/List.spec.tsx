import React from 'react'
import { render, screen, within } from '@testing-library/react'
import List from './List'

describe('<List />', () => {
    test('Renders correctly when passed list items', async () => {
        const testData = [
            {
                name: 'RICK ASTLEY',
                superpower: 'Never gives you up',
                end_of_an_era: '2020-11-17T00:00:00.000+00:00',
            },
            {
                name: 'RICK ASTLEY 2',
                superpower: 'Never gives you up',
                end_of_an_era: '2020-11-17T00:00:00.000+00:00',
            },
        ]

        const { getAllByRole } = render(<List data={testData} />)
        const listItems = getAllByRole('listitem')
        expect(listItems).toHaveLength(2)

        listItems.forEach((item, index) => {
            const { getByText } = within(item)
            const { name } = testData[index]
            expect(getByText(name)).toBeInTheDocument()
        })
    })
})
